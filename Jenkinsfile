pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/vaghesh/hello-world'
      }
    }
    stage('Infrastructure Setup') {
      steps {
        sleep 5
      }
    }
    stage('Build') {
      steps {
        sh '''chmod a+x build.sh
./build.sh'''
      }
    }
    stage('Unit Testing') {
      steps {
        sh 'ls'
      }
    }
    stage('Static Code Analysis') {
      parallel {
        stage('Checkmarx') {
          steps {
            sleep 10
          }
        }
        stage('Klockworks') {
          steps {
            sleep 2
          }
        }
      }
    }
    stage('Protex Scan') {
      steps {
        sleep 2
      }
    }
    stage('Intel Docker Push') {
      steps {
        sleep 3
      }
    }
    stage('Docker Registry') {
      parallel {
        stage('Developer') {
          steps {
            sh '''chmod a+x ./delivery/developer-registry.sh
./delivery/developer-registry.sh'''
          }
        }
        stage('Integration') {
          steps {
            sh '''chmod a+x ./delivery/integration-registry.sh
./delivery/integration-registry.sh'''
            input 'Finished using the web site? (Click "Proceed" to continue) '
          }
        }
      }
    }
    stage('Notifications') {
      steps {
        echo 'Notification Sent. '
      }
    }
    stage('End') {
      steps {
        echo 'Success'
      }
    }
    stage('Docker Registry - Integration') {
      steps {
        sh '''chmod a+x ./delivery/integration-registry.sh
./delivery/integration-registry.sh'''
      }
    }
  }
}