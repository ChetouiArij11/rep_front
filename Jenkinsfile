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
                    bat "docker build -t frontend:latest ."
                    bat "docker tag frontend:latest arijchetoui1/frontend:latest"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Exécuter le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 8380:80 --name frontend_container_latest arijchetoui1/frontend:latest"
                }
            }
        }

        stage('Selenium Tests') {
            steps {
                script {
                    // Télécharger et installer ChromeDriver si nécessaire
                    bat """
                    if not exist chromedriver.exe (
                        curl -L https://chromedriver.storage.googleapis.com/91.0.4472.101/chromedriver_win32.zip -o chromedriver.zip
                        tar -xf chromedriver.zip
                    )
                    """
                    // Installer les dépendances npm pour les tests Selenium
                    bat "cd e2e && npm install"

                    // Ajouter ChromeDriver au PATH
                    env.PATH = "${env.WORKSPACE}\\e2e\\node_modules\\.bin;${env.PATH}"

                    // Exécuter les tests Selenium
                    bat "node .\\e2e\\testPRV.js"
                }
            }
        }

        stage('Deploy Docker image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', '14') {
                        // Push both the latest and tagged images
                        docker.image('arijchetoui1/frontend:latest').push()
                    }
                }
            }
        }
    }
}
