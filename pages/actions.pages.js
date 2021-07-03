const { Selector } = require('testcafe');
var shell = require('shelljs');
const fs = require('fs');

async function navigate(url) {
    await testController.navigateTo(url);
}

async function click_element(element) {
    await testController.click(element);
}

async function take_screenshot(scenario) {
    await testController.takeScreenshot({ path: "/" + scenario + "/" + scenario + ".png" })
}

async function type_text(element, value) {
    await testController.typeText(element, value, { replace: true })
}

async function click_element_from_list(element, value) {
    const option = Selector(element).withText(value)
    await testController.click(option)
}

async function fill_element_from_list(element, value, string) {
    const selector = Selector(element).withText(value)
    await testController.typeText(selector, string, { replace: true })
}

async function hover_element(element) {
    await testController.hover(element)
}

async function hover_element_from_list(element, value) {
    const option = Selector(element).withText(value)
    await testController.hover(option)
}

async function maximize_window() {
    await testController.maximizeWindow()
}

async function wait(seconds) {
    var time = parseInt(seconds, 10);
    await testController.wait(time * 1000)
}

async function drag(element, x, y) {
    var value_1 = parseInt(x, 10);
    var value_2 = parseInt(y, 10);
    await testController.drag(element, value_1, value_2, { offsetX: 10, offsetY: 10 })
}

function execute_shell(command) {
    shell.exec(command)
}

function get_actual_date() {
    const act_date = new Date();
    return act_date
}

function write_date() {
    let data = String(this.get_actual_date())
    fs.appendFileSync("date.txt", data + '_', "UTF-8", { 'flags': 'a+' });
}

function read_start_date() {
    var str = fs.readFileSync('./date.txt', 'utf8');
    var dates = str.split('_')
    var start_date_raw = dates[0]
    var start_date = start_date_raw.split('(')
    return start_date[0]
}

function read_end_date() {
    var str = fs.readFileSync('./date.txt', 'utf8');
    var dates = str.split('_')
    var end_date_raw = dates[1]
    var end_date = end_date_raw.split('(')
    return end_date[0]
}

function read_bearer() {
    var str = fs.readFileSync('api/billing/bearer.txt', 'utf8');
    // var str = fs.readFileSync('./bearer.txt', 'utf8');
    return str
}

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

async function drag(element, x, y) {
    var value_1 = parseInt(x, 10);
    var value_2 = parseInt(y, 10);
    await testController.drag(element, value_1, value_2, { offsetX: 10, offsetY: 10 })
}

async function get_text(element) {
    const text = await select(element).innerText;
    return text
}

module.exports = {
    navigate: navigate,
    click_element: click_element,
    take_screenshot: take_screenshot,
    execute_shell: execute_shell,
    type_text: type_text,
    click_element_from_list: click_element_from_list,
    fill_element_from_list: fill_element_from_list,
    hover_element: hover_element,
    hover_element_from_list: hover_element_from_list,
    wait: wait,
    drag: drag,
    get_actual_date: get_actual_date,
    write_date: write_date,
    read_start_date: read_start_date,
    read_end_date: read_end_date,
    maximize_window: maximize_window,
    select: select,
    get_text: get_text,
    read_bearer: read_bearer
};
