pipeline {

    agent any

    stages {
        stage("build") {
            steps {
                // sh 'npm install'
                echo 'build the application...'
            }
        }

        stage("test") {
            steps {
                // sh 'mocha'
                echo 'testing the application...'
            }
        }

        stage("deploy") {
            steps {
                // sh 'git add .'
                // sh 'git commit -m "deployed from jenkins" '
                // sh 'git commit origin master'
                echo 'deploying the application'
            }
        }
    }
}