def buildApp() {
    sh 'npm install'
} 

def testApp() {
    sh 'npm test'
}

return this