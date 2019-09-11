pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        sh 'git clone https://github.com/vaghesh/hello-world/'
      }
    }
    stage('Build') {
      steps {
        sh './build.sh'
      }
    }
    stage('Success') {
      steps {
        echo 'It is Successful'
      }
    }
  }
}