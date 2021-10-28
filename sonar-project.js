const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  token: '4b8c221980343f8107479a1f4a887062c0424916',
  options: {
    'sonar.sources': './src',
    'sonar.tests': './tests',
    'sonar.inclusions': './src/**/*.spec.js', // Entry point of your code
    "sonar.typescript.lcov.reportPaths": "./coverage/lcov.info",
    "sonar.testExecutionReportPaths": "./reports/test-report.xml",
  }
}, () => { });