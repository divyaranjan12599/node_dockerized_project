pipeline{
    agent any

    tools {nodejs "nodejs"}
    
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("build"){
            steps{
                sh 'npm run dev'
            }
        }
    }
}
