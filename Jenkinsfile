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
                try {
                    dir("Node") {
                        sh 'npm install'
                    }
                } catch(Exception e) {
                    params.executeTests = false
                }
            }
        }

        stage("test") {
            steps {
                try {
                    dir("Node") {
                        sh 'npm test'
                    }
                } catch(Exception e) {
                    params.executeDeploy = false
                    params.executeDeploy.description = "tests have failed".
                }
            }
        }

        stage("deploy") {
            steps {
                if(!params.executeDeploy) { error "${params.executeDeploy.description}" }
                else { echo "Deploy successful" }
            }
        }
    }

    // post { // executes after all the stages are done

    // }
}