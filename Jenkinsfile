pipeline {
    agent any
    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"
        ANSIBLE_IP = credentials('ANSIBLE_IP')
        SSH_KEY_PATH = "/var/lib/jenkins/.ssh/jenkins-ansible-key"
        GITHUB_RAW_PLAYBOOK = "https://raw.githubusercontent.com/daiarobert/Portofolio/main/ansible/deploy.yml"
        GITHUB_RAW_INVENTORY = "https://raw.githubusercontent.com/daiarobert/Portofolio/main/ansible/inventory.ini"
    }
    stages {
        stage('Build & Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh '''
                        echo "🔹 Autentificare în Docker Hub..."
                        docker login -u $DOCKER_USER -p $DOCKER_PASS

                        echo "🔹 Construire imagine Docker..."
                        docker build -t daiarobert/vue-app:latest .

                        echo "🔹 Trimitere imagine în Docker Hub..."
                        docker push daiarobert/vue-app:latest
                        '''
                    }
                }
            }
        }
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
