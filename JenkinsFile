pipeline {
    agent {
        docker {
            image 'cypress/included:14.5.4'
            args '-u root --entrypoint='
        }
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Cypress tests') {
            steps {
                sh 'npm run test:allure'
            }
        }

        stage('Generate Allure report') {
            steps {
                sh 'npm run allure:generate'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'allure-results/**,allure-report/**,cypress/screenshots/**,cypress/videos/**', allowEmptyArchive: true
        }
    }
}