def buildApp() {
    sh 'cd Node'
    sh 'npm install'
} 

def testApp() {
    sh 'npm test'
}

return this