pipeline {

    agent any

    stages {
        stage("init") {
            steps {
                sh 'cd Node'
            }
        }
        stage("build") {
            steps {
                sh 'npm install'
            }
        }

        stage("test") {
            steps {
                script {
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