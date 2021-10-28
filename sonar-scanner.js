const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl: 'http://localhost:9000',
    token : "0cfbadbf7c495b87a8647bce601f8e226313abc6",
    options: {
      'sonar.projectName': 'Node Express Boilerplate',
      'sonar.projectDescription': 'Description for "Telegram Bot" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'tests'
    }
  },
  () => process.exit()
)