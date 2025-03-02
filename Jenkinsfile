pipeline {
    agent any
    triggers {
        githubPush()
    }
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/daiarobert/Portofolio.git'
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
