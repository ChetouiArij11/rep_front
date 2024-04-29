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
                    // Construisez l'image Docker
                    bat "docker build -t frontend:${BUILD_ID} ."
                    bat "docker tag frontend:${BUILD_ID} arijchetoui1/frontend:${BUILD_ID}"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécutez le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8333:80 --name frontend_container_${BUILD_ID} arijchetoui1/frontend:${BUILD_ID}"
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    // Pousser l'image Docker vers Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'arijchetoui11-token', usernameVariable: 'arijchetoui11', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                        // Se connecter à Docker Hub en utilisant les informations d'identification
                        bat "echo ${DOCKERHUB_PASSWORD} | docker login -u ${arijchetoui11} --password-stdin"
                        // Pousser l'image Docker vers Docker Hub
                        bat "docker push arijchetoui1/frontend:${BUILD_ID}"
                    }
                }
            }
        }
    }
}
