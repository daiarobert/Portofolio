pipeline {
    agent any
    environment {
        ANSIBLE_IP = credentials('ANSIBLE_IP')
        SSH_KEY_PATH = "/var/lib/jenkins/.ssh/jenkins-ansible-key"
        GITHUB_RAW_URL = "https://raw.githubusercontent.com/daiarobert/Portofolio/main/deploy.yml"
    }
    stages {
        stage('Deploy via Ansible') {
            steps {
                sh '''
                echo "🔹 Jenkins folosește cheia de la: $SSH_KEY_PATH"
                chmod 600 $SSH_KEY_PATH
                ssh -o StrictHostKeyChecking=no -i $SSH_KEY_PATH ec2-user@$ANSIBLE_IP "
                curl -s -o /tmp/deploy.yml $GITHUB_RAW_URL &&
                ansible-playbook -i /tmp/inventory /tmp/deploy.yml
                "
                '''
            }
        }
    }
}
