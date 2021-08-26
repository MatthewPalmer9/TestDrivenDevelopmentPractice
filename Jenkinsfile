pipeline {

    agent any

    stages {
        stage("build") {
            steps {
                sh 'cd Node'
                sh 'npm install'
            }
        }

        stage("test") {
            steps {
                script {
                    sh 'cd Node'
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