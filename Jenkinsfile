pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & rename Docker Image') {
            steps {
                script {

                    bat "docker build -t frontend:latest ."
                    bat "docker tag frontend:latest arijchetoui1/frontend:latest"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {

                    bat "docker run -d -p 8380:80 --name frontend_container_latest arijchetoui1/frontend:latest"
                }
            }
        }

         stage('Deploy Docker image') {
            steps {
                script {

                     docker.withRegistry('https://index.docker.io/v1/', '14') {

                        docker.image('arijchetoui1/frontend:latest').push()
                    }
                }
            }
        }


    }

}
