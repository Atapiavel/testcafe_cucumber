const ActionsPage = require("../actions.pages")
var assert = require('assert');
const fetch = require("node-fetch");
const Requests = require("../../api/billing/requests");
const fs = require('fs');

var username = "commcenter@scorpion.co"
var password = "Comms1234!"
// var username = "thebillingteam@scorpion.co"
// var password = "Billing1234!!"

// URL's
const url = "https://integration.scorpion.co/csx/billing/graphql"
const base_url = 'https://integration.scorpion.co'
const loginUrl = base_url + "/platform/identity/v1/api/oauth2/login2";
const authorizeUrl = base_url + "/platform/identity/v1/api/oauth2/ropc/authorize";
const logoff_url = base_url + "/platform/identity/v1/api/oauth2logoff/logoff"

// HEADERS & BODIES
const auth_headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}
const loginBody = {
    client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
    password,
    username,
};

// DATES VARIABLES
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);

async function assert_recent_invoices() {
    // Login API
    fetch(loginUrl, {
        method: 'POST',
        headers: auth_headers,
        body: JSON.stringify(loginBody)
    })
        .then(r => r.json())
        .then((accessToken) => {
            if (typeof window !== "undefined") {
                window.localStorage.clear();
                window.localStorage.setItem('platform.auth-access-token', JSON.stringify(accessToken))
            }
            const authorizeBody = {
                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                code: accessToken.result,
            };
            // Authorization API
            fetch(authorizeUrl, {
                method: 'POST',
                headers: auth_headers,
                body: JSON.stringify(authorizeBody)
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    var bearer = String(data.id_token)
                    const headers = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + bearer
                    }
                    var invoice_arr = []
                    var z = 0
                    // Invoice List API
                    fetch(url, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            query: Requests.getInvoiceList(100),
                        })
                    })
                        .then(r => r.json())
                        .then(data => {
                            console.log(data.data.getInvoiceList)
                            var number_of_invoices = data.data.getInvoiceList.items.length
                            // Filtering the invoices for general year filter
                            for (var n = 0; n < number_of_invoices; n++) {
                                let due_date = new Date(data.data.getInvoiceList.items[n].dueDate);
                                let start_date = new Date(data.data.getInvoiceList.items[n].startDate)
                                let end_date = new Date(data.data.getInvoiceList.items[n].endDate)
                                if (due_date >= prev_date && due_date <= act_date ||
                                    start_date >= prev_date && start_date <= act_date ||
                                    end_date >= prev_date && end_date <= act_date) {
                                    const formattedDate = due_date.toLocaleString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    });
                                    if (z > 0) {
                                        invoice_arr[z] =
                                        {
                                            date: formattedDate,
                                            number: data.data.getInvoiceList.items[n].invoiceNumber,
                                            period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                            status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                            amount: data.data.getInvoiceList.items[n].amountDue
                                        }
                                        z = z + 1
                                    }
                                    if (z == 0) {
                                        invoice_arr[0] =
                                        {
                                            date: formattedDate,
                                            number: data.data.getInvoiceList.items[n].invoiceNumber,
                                            period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                            status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                            amount: data.data.getInvoiceList.items[n].amountDue
                                        }
                                        z = z + 1
                                    }
                                    // Ordering the invoices into an array
                                    if (z == number_of_invoices) {
                                        if (number_of_invoices > 5) {
                                            var counter = 5
                                        }
                                        else {
                                            var counter = number_of_invoices
                                        }
                                        var sorted = invoice_arr.sort(function (a, b) {
                                            var dateA = new Date(a.date), dateB = new Date(b.date);
                                            return dateA - dateB;
                                        }).reverse()
                                        var newArr = sorted.map(function (item) {
                                            return [item.date, item.number, item.period, item.status, item.amount]
                                        })
                                        console.log(newArr)
                                        fs.unlinkSync('pages/billing/aux_file.txt');
                                        var start = "0"
                                        fs.appendFileSync("pages/billing/aux_file.txt", start, "UTF-8", { 'flags': 'a+' });
                                        for (var i = 0; i < counter; i++) {
                                            const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)"
                                            const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                                            const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                                            const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                                            const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                                            // Retrieve text for async functions
                                            async function assertion(element, counter, field) {
                                                var value = await ActionsPage.select(element).innerText;
                                                var api_value = newArr[counter][field]
                                                // Formatter for currency
                                                var formatter = new Intl.NumberFormat('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                                });
                                                if (field == "4") {
                                                    api_value = formatter.format(api_value)
                                                }
                                                console.log("Front End value: " + value)
                                                console.log("API value: " + api_value + "\n")
                                                assert(value == api_value)
                                                var data = fs.readFileSync('./pages/billing/aux_file.txt', 'utf8')
                                                data = data.split("-")
                                                assert_aux = parseInt(data[0], 10) + 1
                                                aux_result = assert_aux.toString()
                                                fs.unlinkSync('pages/billing/aux_file.txt');
                                                fs.appendFileSync("pages/billing/aux_file.txt", aux_result + "-" + number_of_invoices, "UTF-8", { 'flags': 'a+' });
                                            }
                                            // Assertions API Data & UI Data
                                            assertion(date_record, i, "0")
                                            assertion(number_record, i, "1")
                                            assertion(period_record, i, "2")
                                            assertion(status_record, i, "3")
                                            assertion(amount_record, i, "4")
                                        }
                                    }

                                }
                            }
                            // Logoff API
                            fetch(logoff_url, {
                                method: 'POST',
                                headers: headers
                            })
                        })
                }
                )
        })
}

async function assert_results() {
    var data = fs.readFileSync('./pages/billing/aux_file.txt', 'utf8')
    data = data.split("-")
    console.log(data)
    if (data[0] == (data[1] * 5)) {
        console.log("All data match correctly")
        assert.ok(true)
    }
    else {
        assert.ok(false)
    }
}

async function assert_columns(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "tr[role='row'] > th:nth-of-type(" + (i + 1) + ")"
        const text = await ActionsPage.select(header).innerText
        assert(text == data_flat[i])
    }
}

async function assert_kebab_file_download(option_text, option) {
    await ActionsPage.click_element(kebab)
    menu_option = "scorpion-menu-item:nth-of-type(3)"
    const text = await ActionsPage.select(menu_option).innerText
    assert(text == "Download")
    await ActionsPage.hover_element(menu_option)
    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(" + option + ")"
    const text_2 = await ActionsPage.select(download_option).innerText
    assert(text_2 == option_text)
    await ActionsPage.hover_element(download_option)
    await ActionsPage.click_element(kebab)
}

async function assert_kebab_option(option) {
    // Login API
    fetch(loginUrl, {
        method: 'POST',
        headers: auth_headers,
        body: JSON.stringify(loginBody)
    })
        .then(r => r.json())
        .then((accessToken) => {
            if (typeof window !== "undefined") {
                window.localStorage.clear();
                window.localStorage.setItem('platform.auth-access-token', JSON.stringify(accessToken))
            }
            const authorizeBody = {
                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                code: accessToken.result,
            };
            // Authorization API
            fetch(authorizeUrl, {
                method: 'POST',
                headers: auth_headers,
                body: JSON.stringify(authorizeBody)
            })
                .then(r => r.json())
                .then(data => {
                    var bearer = String(data.id_token)
                    const headers = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + bearer
                    }
                    var invoice_arr = []
                    var z = 0
                    // Invoice List API
                    fetch(url, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            query: Requests.getInvoiceList(100),
                        })
                    })
                        .then(r => r.json())
                        .then(data => {
                            var number_of_invoices = data.data.getInvoiceList.items.length
                            // Filtering the invoices for general year filter
                            for (var n = 0; n < number_of_invoices; n++) {
                                let due_date = new Date(data.data.getInvoiceList.items[n].dueDate);
                                let start_date = new Date(data.data.getInvoiceList.items[n].startDate)
                                let end_date = new Date(data.data.getInvoiceList.items[n].endDate)
                                if (due_date >= prev_date && due_date <= act_date ||
                                    start_date >= prev_date && start_date <= act_date ||
                                    end_date >= prev_date && end_date <= act_date) {
                                    const formattedDate = due_date.toLocaleString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric"
                                    });
                                    if (z > 0) {
                                        invoice_arr[z] =
                                        {
                                            date: formattedDate,
                                            number: data.data.getInvoiceList.items[n].invoiceNumber,
                                            period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                            status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                            amount: data.data.getInvoiceList.items[n].amountDue
                                        }
                                        z = z + 1
                                    }
                                    if (z == 0) {
                                        invoice_arr[0] =
                                        {
                                            date: formattedDate,
                                            number: data.data.getInvoiceList.items[n].invoiceNumber,
                                            period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                            status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                            amount: data.data.getInvoiceList.items[n].amountDue
                                        }
                                        z = z + 1
                                    }
                                    // Ordering the invoices into an array
                                    if (z == number_of_invoices) {
                                        var sorted = invoice_arr.sort(function (a, b) {
                                            var dateA = new Date(a.date), dateB = new Date(b.date);
                                            return dateA - dateB;
                                        }).reverse()
                                        var newArr = sorted.map(function (item) {
                                            return [item.date, item.number, item.period, item.status, item.amount]
                                        })
                                        for (var i = 0; i < newArr.length; i++) {
                                            // const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)"
                                            // const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                                            // const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                                            // const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                                            // const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                                            const kebab = "tbody .ng-star-inserted:nth-of-type(" + (i + 1) + ") scorpion-icon"

                                            // async function assertion(element, counter, field) {
                                            //     var value = await ActionsPage.select(element).innerText;
                                            //     var api_value = newArr[counter][field]
                                            //     // Formatter for currency
                                            //     var formatter = new Intl.NumberFormat('en-US', {
                                            //         style: 'currency',
                                            //         currency: 'USD',
                                            //     });
                                            //     if (field == "4") {
                                            //         api_value = formatter.format(api_value)
                                            //     }
                                            //     assert(value == api_value)
                                            // }
                                            function assert_kebab_text(option_text, option, element) {
                                                return new Promise((resolve, reject) => {
                                                    console.log("1")
                                                    console.log(element)
                                                    console.log("2")
                                                    ActionsPage.hover_element(element)
                                                    console.log("3")
                                                    ActionsPage.click_element(element)
                                                    console.log("4")
                                                    var menu_option = "scorpion-menu-item:nth-of-type(" + option + ")"
                                                    console.log("5")
                                                    ActionsPage.hover_element(menu_option)
                                                    console.log("6")
                                                    let text = ActionsPage.get_text(element);
                                                    console.log("7")
                                                    console.log(text)
                                                    console.log("8")
                                                    console.log(option_text)
                                                    console.log("9")
                                                    if (text == option_text) {
                                                        resolve
                                                    }
                                                    else {
                                                        reject
                                                    }
                                                    console.log("10")
                                                    ActionsPage.click_element(kebab)
                                                })
                                            }
                                            // assertion(date_record, i, "0")
                                            // assertion(number_record, i, "1")
                                            // assertion(period_record, i, "2")
                                            // assertion(status_record, i, "3")
                                            // assertion(amount_record, i, "4")
                                            if (option == "send") {
                                                assert_kebab_text("Send", "1", kebab).then(data => {
                                                    console.log(data)
                                                })
                                            }
                                            if (option == "print") {
                                                assert_kebab_text("Print", "2", kebab)
                                            }
                                            if (option == "download_PDF") {
                                                assert_kebab_file_download(".PDF", "1", kebab)
                                            }
                                            if (option == "download_DOC") {
                                                assert_kebab_file_download(".DOC", "2", kebab)
                                            }
                                            if (option == "download_CSV") {
                                                assert_kebab_file_download(".CSV", "3", kebab)
                                            }
                                            //     const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)"
                                            //     const text = ActionsPage.select(record).innerText
                                            //     for (var n = 0; n < newArr.length; n++) {
                                            //         console.log(text)
                                            //         if (text == newArr[i][0]) {
                                            //             const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                                            //             const text = ActionsPage.select(record).innerText
                                            //             console.log(text)
                                            //             console.log(newArr[i][1])
                                            //             if (text == newArr[i][1]) {
                                            //                 const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                                            //                 const text = ActionsPage.select(record).innerText
                                            //                 console.log(text)
                                            //                 console.log(newArr[i][2])
                                            //                 if (text == newArr[i][2]) {
                                            //                     const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                                            //                     const text = ActionsPage.select(record).innerText
                                            //                     console.log(text)
                                            //                     console.log(newArr[i][3])
                                            //                     if (text == newArr[i][3]) {
                                            //                         const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                                            //                         const text = ActionsPage.select(record).innerText
                                            //                         console.log(text)
                                            //                         console.log(newArr[i][4])
                                            //                         if (text == newArr[i][4]) {
                                            //                             kebab = ActionsPage.select("tbody .ng-star-inserted:nth-of-type(" + (i + 1) + ") scorpion-icon")
                                            //                             ActionsPage.hover_element(kebab)
                                            //                             if (option == "send") {
                                            //                                 assert_kebab_text("Send", "1")
                                            //                             }
                                            //                             if (option == "print") {
                                            //                                 assert_kebab_text("Print", "2")
                                            //                             }
                                            //                             if (option == "download_PDF") {
                                            //                                 assert_kebab_file_download(".PDF", "1")
                                            //                             }
                                            //                             if (option == "download_DOC") {
                                            //                                 assert_kebab_file_download(".DOC", "2")
                                            //                             }
                                            //                             if (option == "download_CSV") {
                                            //                                 assert_kebab_file_download(".CSV", "3")
                                            //                             }
                                            //                         }
                                            //                     }
                                            //                 }
                                            //             }
                                            //         }
                                            //     }
                                            // }
                                        }
                                    }
                                }
                            }
                            // Logoff API
                            fetch(logoff_url, {
                                method: 'POST',
                                headers: headers
                            })
                        })
                })
        })
}

module.exports = {
    assert_recent_invoices: assert_recent_invoices,
    assert_results: assert_results,
    assert_columns: assert_columns,
    assert_kebab_option: assert_kebab_option
};
