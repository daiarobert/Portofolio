pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
        DEPLOY_IP = credentials('DEPLOY_IP')
        DOCKER_CREDENTIALS = credentials('DOCKER_HUB')
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/daiarobert/Portofolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mydockerhub/vue-app:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'echo $DOCKER_CREDENTIALS | docker login -u mydockerhub --password-stdin'
                sh 'docker push mydockerhub/vue-app:latest'
            }
        }
        stage('Deploy via Ansible') {
            steps {
                sshagent(['jenkins-ansible-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ec2-user@$ANSIBLE_IP << 'EOF'
                    cd ~/ansible-deploy
                    git pull origin main
                    ansible-playbook -i inventory deploy.yml
                    EOF
                    '''
                }
            }
        }
    }
}
