pipeline {
    agent any
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
    }
    stages {
        stage('Deploy via Ansible') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'jenkins-ansible-key', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                    chmod 600 $SSH_KEY
                    ssh -o StrictHostKeyChecking=no -i $SSH_KEY ec2-user@$ANSIBLE_IP << 'EOF'
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
