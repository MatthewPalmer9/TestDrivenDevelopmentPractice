def nextStageExecutes = false;

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
                    sh 'npm install' 
                    // What if this fails? What code can I use to catch this
                    // so that it doesn't move to the "test" stage?
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
                    sh 'npm test'
                }
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