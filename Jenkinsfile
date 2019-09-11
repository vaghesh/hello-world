pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/vaghesh/hello-world'
      }
    }
    stage('Build') {
      steps {
        sh '''chmod a+x install.sh
./install.sh'''
      }
    }
    stage('Success') {
      steps {
        echo 'It is Successful'
      }
    }
  }
}