pipeline {

    agent any

    stages {
        stage("build") {
            steps {
                dir("Node") {
                    sh 'npm install'
                }
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