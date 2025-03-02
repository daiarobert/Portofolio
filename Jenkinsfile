pipeline {
    agent any
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
    }
    stages {
        stage('Deploy via Ansible') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'jenkins-ansible-key', keyFileVariable: 'SSH_KEY_PATH')]) {
                    sh '''
                    echo "🔹 SSH_KEY_PATH = $SSH_KEY_PATH"
                    ls -la $SSH_KEY_PATH
                    file $SSH_KEY_PATH
                    cat $SSH_KEY_PATH | head -n 5
                    chmod 600 $SSH_KEY_PATH
                    ssh -o StrictHostKeyChecking=no -i $SSH_KEY_PATH ec2-user@$ANSIBLE_IP << 'EOF'
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
