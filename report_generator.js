const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './reports',
    reportPath: './reports/report',
    storeScreenshots: true,
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Billing & Comms Project'},
        ]
    }
});