// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  directConnect: (!process.env.IS_JENKINS && true),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: (process.env.IS_CIRCLE ? ['--headless'] : [])
    }
  },
  baseUrl: 'https://testing-angular-applications.github.io',
  specs:
    ['./src/**/*.e2e-spec.ts'],
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare:
    () => {
      if (process.env.IS_JENKINS) {
        let jasmineReporters = require('jasmine-reporters');
        let junitReporter = new jasmineReporters.JUnitXmlReporter({
          savePath: 'output/',
          consolidateAll: false
        });
        jasmine.getEnv().addReporter(junitReporter);
      }
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
      });
      jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    }
}


