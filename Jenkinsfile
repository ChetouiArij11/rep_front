pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
        KUBECONFIG = 'C:\\Program Files\\Jenkins\\.kube\\config'
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

        // stage('Run Docker Container') {
        //     steps {
        //         script {

        //             bat "docker run -d -p 8380:80 --name frontend_container_latest arijchetoui1/frontend:latest"
        //         }
        //     }
        // }

         stage('Deploy Docker image') {
            steps {
                script {

                     docker.withRegistry('https://index.docker.io/v1/', '14') {

                        docker.image('arijchetoui1/frontend:latest').push()
                    }
                }
            }
        }

          stage('Kubernetes Deployment') {
            steps {
                script {
                    // Apply Kubernetes deployment, service, and ingress configurations
                    bat "kubectl apply -f deployment.yaml"
                    bat "kubectl apply -f service.yaml"
                    bat "kubectl apply -f ingress.yaml"
                    bat "kubectl get deployment"
                    bat "kubectl get svc "
                    bat "kubectl get svc --all-namespaces"
                }
            }
        }


    }

}
