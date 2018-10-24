pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install --only=dev'
            }
        }
        stage('Static Code Lint') {
            steps {
                sh './node_modules/.bin/eslint src/'
            }
        }
    }
} 
