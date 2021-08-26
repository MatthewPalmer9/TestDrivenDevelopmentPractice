def buildApp() {
    sh 'npm install'
} 

def testApp() {
    sh 'mocha'
}

return this