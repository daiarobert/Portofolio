# 🚀 DevOps CI/CD Pipeline for Vue.js Application

This project implements a CI/CD pipeline for a Vue.js application, automating the build, test, and deployment process using GitHub Actions, Jenkins, Docker, and Ansible on AWS EC2.

## 🎯 Objectives

Automate the deployment process using CI/CD tools.

Containerize the application using Docker.

Use GitHub Actions for building and pushing the Docker image to Docker Hub.

Deploy the application using Jenkins and Ansible.

Use AWS EC2 instances for Jenkins, Ansible, and the Deployment server.

## 🛠 Technologies Used

✅ GitHub Actions - Automates the build and push process.\
✅ Docker - Containerization of the Vue.js application.\
✅ Jenkins - CI/CD orchestration.\
✅ Ansible - Automates server configuration and deployment.\
✅ AWS EC2 - Cloud instances for Jenkins, Ansible, and Deployment.\
✅ Docker Hub - Stores the built Docker images.

## 📁 Infrastructure Setup

Three AWS EC2 instances were configured, each with a specific role:

✅ Jenkins Instance

Installed Jenkins to orchestrate the deployment.
Configured GitHub Webhooks to trigger pipelines.
Set up SSH keys to connect to Ansible.

✅ Ansible Instance

Installed Ansible to automate deployment.
Configured SSH access to the Deploy instance.
Fetches and runs Ansible Playbook when triggered by Jenkins.

✅ Deploy Instance

Runs the containerized Vue.js application.
Installed Docker to run the application in a container.
Connecting the Instances via SSH
To allow secure communication:

Jenkins → Ansible (Triggers deployment)
Ansible → Deploy (Installs Docker & runs containers)
Example SSH setup:

```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/jenkins-ansible-key
```

This key is used by Jenkins to connect to the Ansible instance.\
Adding the public key to the Ansible Instance:

```
cat ~/.ssh/jenkins-ansible-key.pub >> ~/.ssh/authorized_keys
```

Configuring SSH connection between Ansible and Deploy:\
On the Ansible instance, I generated an SSH key for connecting to Deploy:

```
ssh-keygen -t rsa -b 4096 -f ~/.ssh/ansible-deploy-key
```

Added the key on Deploy Instance:

```
cat ~/.ssh/ansible-deploy-key.pub >> ~/.ssh/authorized_keys
```

testing connection:

```
ssh -i ~/.ssh/ansible-deploy-key ec2-user@DEPLOY_IP

```

Now, Jenkins can execute the Ansible playbook, and Ansible can configure and launch the containers on the deploy instance.

## 2. Dockerizing the App

A Dockerfile was created to containerize the Vue.js application, using Node.js for building and Nginx for serving the app.
dockerfile

```
# Stadiul de build
FROM node:16 AS build-stage
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stadiul final
FROM nginx:alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

✅ Explanation:

We use Node.js to build the application.\
We copy the necessary files and run npm install and npm run build.\
We use Nginx to serve the static application.\
The exposed port is 80 for web access.

## 3. GitHub Actions for Build & Push

To avoid installing Docker on Jenkins, GitHub Actions was used to build and push the image to Docker Hub.

Workflow Highlights
Triggers on push to main
Builds & pushes Docker image
Uses secrets for Docker Hub credentials

Example:

```
name: Build and Push Docker Image

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Docker Build
        uses: docker/setup-build-action@v2

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: daiarobert/vue-app:latest
```

✅ Secrets configured in GitHub Actions

To ensure credential security, we added the following in Settings → Secrets and variables → Actions:

DOCKER_USERNAME → Docker Hub username\
DOCKER_PASSWORD → Token generated from Docker Hub

How the workflow works?

It is automatically triggered on every push to the main branch.\
The repository is checked out.\
Docker Buildx is configured to allow optimized builds.\
It authenticates to Docker Hub using the secrets.\
The daiarobert/vue-app:latest image is built and published.

## 4. Jenkins Deployment Pipeline

Once the image is available on Docker Hub, Jenkins triggers the Ansible playbook to deploy it.

🔹 Pipeline Setup in Jenkins:\
✅ Configured a Freestyle job with GitHub Webhook for auto-trigger.\
✅ Added SSH credentials for secure access.\
✅ Jenkins executes the Ansible playbook on the Ansible instance.

📌 Fișierul Jenkinsfile

```
pipeline {
    agent any
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')  // IP-ul instanței Ansible
        SSH_KEY_PATH = "/var/lib/jenkins/.ssh/jenkins-ansible-key"
        GITHUB_RAW_PLAYBOOK = "https://raw.githubusercontent.com/daiarobert/Portofolio/main/ansible/deploy.yml"
        GITHUB_RAW_INVENTORY = "https://raw.githubusercontent.com/daiarobert/Portofolio/main/ansible/inventory.ini"
    }
    stages {
        stage('Deploy via Ansible') {
            steps {
                sh '''
                echo "🔹 Jenkins folosește cheia de la: $SSH_KEY_PATH"
                chmod 600 $SSH_KEY_PATH
                ssh -o StrictHostKeyChecking=no -i $SSH_KEY_PATH ec2-user@$ANSIBLE_IP "
                curl -s -o /tmp/inventory $GITHUB_RAW_INVENTORY &&
                curl -s -o /tmp/deploy.yml $GITHUB_RAW_PLAYBOOK &&
                ansible-playbook -i /tmp/inventory /tmp/deploy.yml
                "
                '''
            }
        }
    }
}
```

## 5. Deploying with Ansible

✅ What does this Playbook do?

Installs Docker if it is not already installed.\
Checks if a container exists and stops/deletes it before running a new one.\
Runs the latest image downloaded from Docker Hub on port 8080.

📌 deploy.yml

```
- name: Deploy Vue.js Application
  hosts: deploy
  become: yes
  tasks:
    - name: Install Docker
      yum:
        name: docker
        state: present

    - name: Start Docker Service
      systemd:
        name: docker
        enabled: yes
        state: started

    - name: Add ec2-user to Docker group
      command: usermod -aG docker ec2-user

    - name: Pull latest Docker image
      command: docker pull daiarobert/vue-app:latest

    - name: Check if container exists
      shell: docker ps -aq -f name=vue-app
      register: existing_container

    - name: Stop existing container (if running)
      command: docker stop vue-app
      when: existing_container.stdout != ""
      ignore_errors: yes

    - name: Remove existing container
      command: docker rm vue-app
      when: existing_container.stdout != ""
      ignore_errors: yes

    - name: Run new Vue.js container
      command: docker run -d -p 8080:80 --name vue-app daiarobert/vue-app:latest
```
