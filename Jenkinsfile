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
                    // Construire l'image Docker
                    bat "docker build -t frontend:${BUILD_ID} ."
                    bat "docker tag frontend:${BUILD_ID} arijchetoui1/frontend:${BUILD_ID}"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécuter le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8333:80 --name frontend_container_${BUILD_ID} arijchetoui1/frontend:${BUILD_ID}"
                }
            }
        }

         stage('Deploy Docker image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', '112') {
                        // Push both the latest and tagged images
                        docker.image('arijchetoui1/frontend:${BUILD_ID}').push('${BUILD_ID}')
                    }
                }
            }
        }
    }

    post {
        always {
            // Toujours se déconnecter de Docker après l'exécution
            bat 'docker logout'
        }
    }
}
