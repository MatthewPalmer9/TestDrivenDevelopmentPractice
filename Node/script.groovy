def buildApp() {
    sh 'cd Node'
    sh 'npm install'
} 

def testApp() {
    sh 'mocha'
}

return this