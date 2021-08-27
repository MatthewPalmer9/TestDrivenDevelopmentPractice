pipeline {
    agent any

    parameters {
        string(name: 'VERSION', defaultValue: '', description: 'version to deploy on production.')
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
        booleanParam(name: 'executeDeploy', defaultValue: true, description: '')
    }

    stages {
        stage("build") {
            steps {
                dir("Node") {
                    echo 'Hello from Build Stage'
                    sh 'npm build'
                }
            }
            post {
                failure {
                    echo "Build failed..."
                    script { params.executeTests = false }
                }
            }
        }

        stage("test") {
            when { // this will only allow "test" execute if build was successful
                expression {
                    params.executeTests
                }
            }
            steps {
                dir("Node") {
                    echo "Hello from Test Stage"
                    sh 'npm test'
                }
            }
            post {
                success { echo "Tests successful!" }
                failure { 
                    echo "Tests failed..." 
                    script { params.executeDeploy = false }
                }
            }
        }

        stage("deploy") {
            steps {
                echo "Deploying new version ${VERSION}"
            }
            post {
                
            }
        }
    }
}