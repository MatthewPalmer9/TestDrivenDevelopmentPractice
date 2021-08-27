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
                    def buildSuccess = sh 'npm install'
                }
                if(buildSuccess == 'Failed') {
                    error 'Build failed'
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
                    def testResult = sh 'npm test'
                }
                if(testResult == 'Failed') { error "test failed" }
            }
        }

        // stage("deploy") {
        //     steps {
                
        //     }
        // }
    }

    // post { // executes after all the stages are done

    // }
}