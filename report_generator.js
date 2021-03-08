const report = require('multiple-cucumber-html-reporter');
const {start_date, end_date}
 
report.generate({
    jsonDir: './reports',
    reportPath: './reports/report',
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
            {label: 'Project', value: 'Billing Project'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: '0'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});