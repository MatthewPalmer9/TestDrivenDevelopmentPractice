def buildApp() {
    sh 'cd Node'
    sh 'npm install'
} 

def testApp() {
    sh 'cd Node'
    sh 'mocha'
}

return this