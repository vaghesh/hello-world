pipeline {
  agent {
    node {
      label 'Docker-Jenkins-Slave'
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
        sh '''chmod a+x build.sh
./build.sh'''
      }
    }
    stage('Success') {
      steps {
        echo 'It is Successful'
      }
    }
  }
}