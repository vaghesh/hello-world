pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/vaghesh/hello-world'
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