const fs = require('fs');
const createTestCafe = require('testcafe');
const ActionsPage = require('../../pages/actions.pages.js')
const testControllerHolder = require('./testControllerHolder');
const { AfterAll, setDefaultTimeout, Before, After, Status, BeforeAll } = require('cucumber');
const errorHandling = require('./errorHandling');
const TIMEOUT = 60000;
let isTestCafeError = false;
let attachScreenshotToReport = null;
let cafeRunner = null;
let n = 0;

function createTestFile() {
    fs.writeFileSync('test.js',
        'import errorHandling from "./features/support/errorHandling.js";\n' +
        'import testControllerHolder from "./features/support/testControllerHolder.js";\n\n' +

        'fixture("fixture")\n' +

        'test\n' +
        '("test", testControllerHolder.capture)')
}

function runTest(iteration, browser) {
    createTestCafe('localhost', 1338 + iteration, 1339 + iteration)
        .then(function (tc) {
            cafeRunner = tc;
            const runner = tc.createRunner();
            return runner
                .src('./test.js')
                .screenshots('screenshots/')
                .video('videos/', {
                    singleFile: true
                }, {
                    r: 120,
                    aspect: '16:9'
                })
                .browsers(browser)
                .run()
                .catch(function (error) {
                    console.error(error);
                });
        })
}

setDefaultTimeout(TIMEOUT);

BeforeAll(function () {
    fs.unlinkSync('date.txt');
    ActionsPage.execute_shell('rmdir /Q /S screenshots')
    ActionsPage.execute_shell('mkdir screenshots')
    ActionsPage.execute_shell('rmdir /Q /S videos')
    ActionsPage.execute_shell('mkdir videos')
    ActionsPage.write_date()
    process.setMaxListeners(0);
});

async function get_billing_overview_data() {
    var headers = await ActionsPage.bearer()
    var get_billing_overview_data = await ActionsPage.get_billing_overview_data(headers)
    // var subscriptions_list = ActionsPage.get_all_subscriptions(headers)
    // var payment_methods_list = await ActionsPage.get_payment_methods(headers)
    var invoice_list = await ActionsPage.get_invoice_list(headers, 100)
    var account_monies = await ActionsPage.get_account_monies(headers, 1)
    await ActionsPage.logoff(headers)
    return [get_billing_overview_data, invoice_list, account_monies]
}

var billing_overview_data = get_billing_overview_data().then(function(val){
    return val
})
// console.log(billing_overview_data)
// console.log(billing_overview_data[0])
// console.log(billing_overview_data[1])

Before(function () {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController
});

After(function () {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(function (testCase) {
    const world = this;
    var scenario = testCase.pickle.name
    if (testCase.result.status === Status.FAILED) {
        ActionsPage.take_screenshot(testCase.pickle.name)
        isTestCafeError = true;
        errorHandling.addErrorToController();
    }
});

AfterAll(function () {
    let intervalId = null;

    function waitForTestCafe() {
        intervalId = setInterval(checkLastResponse, 500);
    }

    function checkLastResponse() {
        if (testController.testRun.lastDriverStatusResponse === 'test-done-confirmation') {
            cafeRunner.close();
            process.exit();
            clearInterval(intervalId);
        }
    }

    waitForTestCafe();
    ActionsPage.write_date()
    // requests.logoff(base_url, headers)
});

const getIsTestCafeError = function () {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function (path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;

module.exports = {
    billing_overview_data,
}