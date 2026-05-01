pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Setup Node') {
      steps {
        sh 'nvm install 20'
        sh 'nvm use 20'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm build'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying... to the static thing'
      }
    }
  }
}