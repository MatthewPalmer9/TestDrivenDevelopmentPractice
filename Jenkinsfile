def gv
pipeline {

    agent any

    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
                sh 'cd Node'
            }
        }
        stage("build") {
            steps {
                script {
                    gv.buildApp()
                }
            }
        }

        stage("test") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'master'
            //     }
            // }
            steps {
                script {
                    gv.testApp()
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