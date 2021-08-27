
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
                    script { 
                        try {
                            sh 'npm install'
                        } catch(err) {
                            params.executeTests = false
                            params.executeDeploy = false
                            error "Build stage failed. LOG: ${err}"
                        }
                    }
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
                    script {
                        try {
                            sh 'npm test'
                        } catch(err) {
                            params.executeDeploy = false
                            error "Test stage failed. LOG: ${err}"
                        }
                    }
                }
            }
        }

        stage("deploy") {
            steps {
                echo "Deploying version ${VERSION}"
            }
        }
    }

    // post { // executes after all the stages are done

    // }
}