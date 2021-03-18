const fs = require('fs');
const createTestCafe = require('testcafe');
const ActionsPage = require('../../pages/actions.pages.js')
const testControllerHolder = require('./testControllerHolder');
const { AfterAll, setDefaultTimeout, Before, After, Status, BeforeAll } = require('cucumber');
const errorHandling = require('./errorHandling');
const TIMEOUT = 40000;

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
                .screenshots('screenshots/', {
                    takeOnFails: true
                })
                .video('videos/')
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
});

Before(function () {
    runTest(n, this.setBrowser());
    createTestFile();
    n += 2;
    return this.waitForTestController.then(function (testController) {
        // return testController.maximizeWindow();
    });
});

After(function () {
    fs.unlinkSync('test.js');
    testControllerHolder.free();
});

After(async function (testCase) {
    const world = this;
    if (testCase.result.status === Status.FAILED) {
        ActionsPage.take_screenshot()
        isTestCafeError = true;
        this.attachScreenshotToReport('reports/report.json');
        errorHandling.addErrorToController();
        await errorHandling.ifErrorTakeScreenshot(testController)
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
});

const getIsTestCafeError = function () {
    return isTestCafeError;
};

const getAttachScreenshotToReport = function (path) {
    return attachScreenshotToReport(path);
};

exports.getIsTestCafeError = getIsTestCafeError;
exports.getAttachScreenshotToReport = getAttachScreenshotToReport;
