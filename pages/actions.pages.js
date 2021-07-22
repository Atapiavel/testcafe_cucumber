const { Selector } = require('testcafe');
var shell = require('shelljs');
const fs = require('fs');
const fetch = require("node-fetch");
const Requests = require("./.././api/billing/requests");
const billing_url = "https://integration.scorpion.co/csx/billing/graphql"
const base_url = 'https://integration.scorpion.co'

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

async function login(username, password) {
    const loginUrl = base_url + "/platform/identity/v1/api/oauth2/login2";
    const auth_headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    const loginBody = {
        client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
        password,
        username,
    };
    return fetch(loginUrl, {
        method: 'POST',
        headers: auth_headers,
        body: JSON.stringify(loginBody)
    })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            })
        })
}

async function auth(token) {
    const authorizeUrl = base_url + "/platform/identity/v1/api/oauth2/ropc/authorize";
    const auth_headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    const authorizeBody = {
        client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
        code: token,
    };
    return fetch(authorizeUrl, {
        method: 'POST',
        headers: auth_headers,
        body: JSON.stringify(authorizeBody)
    })
        .then((response) => {
            return response.json().then((data) => {
                console.log("\nAuthentication response:\n" + response.status)
                console.log(response.statusText + "\n")
                if (response.status != 200) {
                    console.log(data.status.message)
                }
                return data;
            })
        })
}

async function bearer() {
    // let token_data = await login("thebillingteam@scorpion.co", "Billing1234!!")
    let token_data = await login("commcenter@scorpion.co", "Comms1234!")
    let bearer_data = await auth(token_data.result)
    let bearer_token = bearer_data.id_token
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + bearer_token
    }
    return headers
}

async function logoff(headers) {
    const url = base_url + "/platform/identity/v1/api/oauth2logoff/logoff"
    return fetch(url, {
        method: 'POST',
        headers: headers
    })
        .then((response) => {
            return response.json().then((data) => {
                console.log("\nLogoff response:\n" + response.status)
                console.log(response.statusText)
                if (response.status != 200) {
                    console.log(data.status.message)
                }
                return data;
            })
        })
}

async function get_invoice_list(headers, invoices) {
    return fetch(billing_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            query: Requests.getInvoiceList(invoices),
        })
    })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            })
        })
}

async function get_account_monies(headers, service_line) {
    return fetch(billing_url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            query: Requests.getAccountMonies(service_line),
        })
    })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            })
        })
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
    bearer: bearer,
    logoff: logoff,
    get_invoice_list: get_invoice_list,
    get_account_monies: get_account_monies
};
