pipeline {

    agent any

    stages {
        stage("build") {
            steps {
                sh 'pwd'
                sh "cd ${env.WORKSPACE}/Node"
                sh 'pwd'
            }
        }

        // stage("test") {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        // stage("deploy") {
        //     steps {
                
        //     }
        // }
    }

    // post { // executes after all the stages are done

    // }
}