pipeline {
    agent any
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
        SSH_KEY_PATH = "/var/lib/jenkins/.ssh/jenkins-ansible-key"
    }
    stages {
        stage('Deploy via Ansible') {
            steps {
                sh '''
                echo "🔹 Jenkins folosește cheia de la: $SSH_KEY_PATH"
                chmod 600 $SSH_KEY_PATH
                ssh -o StrictHostKeyChecking=no -i $SSH_KEY_PATH ec2-user@$ANSIBLE_IP "
                ansible-playbook -i ~/ansible/inventory ~/ansible/deploy.yml
                "
                '''
            }
        }
    }
}
