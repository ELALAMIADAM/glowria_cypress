
pipeline{
    agent any
    parameters{
        booleanParam(name:'ALLURE', defaultValue: false, description: 'generation de rapport allure')
    }
    stages{
        stage('global stage'){
            agent{
                docker{
                    image 'cypress/included:14.5.4'
                    args '-u root --entrypoint='
                }
            }
            stages{
                stage('install deps'){
                    steps{
                        sh 'npm ci'
                    }
                }

                stage('clean allure results'){
                    
                    steps{
                        sh '''
                            echo "Suppression du cache Allure..."
                            rm -rf allure-results
                            mkdir -p allure-results
                            echo "Dossier allure-results nettoyé avec succès"
                        '''
                    }
                }
        
                stage('run user test'){
                    steps{  
                        script{
                            if(params.ALLURE){
                                sh"npm run test:allure:report"
                                stash name: 'allure-results', includes: 'allure-results/*'
                            }else {
                                    sh"npx cypress run"   
                            }
                        }
                    }
                }
            }
        }
    }
    post{
        always{
            script{
                if(params.ALLURE){
                    unstash 'allure-results'
                    archiveArtifacts 'allure-results/*'
                    allure includeProperties: false,
                           jdk: '',
                           results: [[path: 'allure-results/']]
                }
            }
        }
    }
}