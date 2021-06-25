const fetch = require("node-fetch");
const ActionsPage = require("../actions.pages")
const Requests = require("../../api/billing/requests");
const BillingHistoryPageLocator = require('../../locators/billing/invoice_history.locators.js');
const assert = require('assert');
const { Selector } = require('testcafe');
let invoice_arr = []
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);
var z = 0

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

async function assert_historical_invoices(url, headers) {
    // Invoice list implementation
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
            for (var n = 0; n < number_of_invoices; n++) {
                var invoice = data.data.getInvoiceList.items[n].invoiceId
                // Invoice implementation
                fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        query: Requests.getInvoice(invoice),
                    })
                })
                    .then(r => r.json())
                    .then(data => {
                        let str = new Date(data.data.getInvoice.dueDate);
                        // Adding the invoices matched with dates filters ()
                        if (str > prev_date && str < act_date) {
                            const formattedDate = str.toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                            });
                            if (z > 0) {
                                invoice_arr[z] =
                                {
                                    date: formattedDate,
                                    number: data.data.getInvoice.invoiceNumber,
                                    period: data.data.getInvoice.billingFrequency,
                                    status: data.data.getInvoice.invoiceStatus,
                                    amount: data.data.getInvoice.amountDue
                                }
                            }
                            if (z == 0) {
                                invoice_arr[0] =
                                {
                                    date: formattedDate,
                                    number: data.data.getInvoice.invoiceNumber,
                                    period: data.data.getInvoice.billingFrequency,
                                    status: data.data.getInvoice.invoiceStatus,
                                    amount: data.data.getInvoice.amountDue
                                }
                            }
                            z = z + 1
                            if (z == number_of_invoices - 2) {
                                var sorted = invoice_arr.sort(function (a, b) {
                                    var dateA = new Date(a.date), dateB = new Date(b.date);
                                    return dateA - dateB;
                                })
                                for (var n = 0; n < sorted.length; n++) {

                                    for (var i = 0; i <= 3; i++) {
                                        // console.log(sorted)
                                        const record = "tr:nth-of-type(" + (n + 1) + ") > td:nth-of-type(" + (i + 2) + ")"
                                        // async function get_text(element) {
                                        //     const text = await select(element).innerText;
                                        //     return text
                                        // }
                                        var text = async function (element) {
                                            const value = await select(element).innerText;
                                            return value
                                        }
                                        text(record).then(function (value) {
                                            console.log(sorted)
                                            console.log(value)
                                        })
                                        // console.log("4" + sorted)
                                        // console.log(val)
                                        // assert(val == sorted[n][i])
                                        // console.log(sorted[n].date)
                                        // console.log(sorted[n].number)
                                        // console.log(sorted[n].period)
                                        // console.log(sorted[n].status)
                                        // console.log(sorted[n].amount)

                                    }
                                }
                            }
                        }
                    })
            }
        });
}

async function assert_columns(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "tr[role='row'] > th:nth-of-type(" + (i + 2) + ")"
        const text = await ActionsPage.select(header).innerText
        assert(text == data_flat[i])
    }
}

async function assert_kebab_text(option_text, option) {
    await ActionsPage.click_element(kebab)
    menu_option = "scorpion-menu-item:nth-of-type(" + option + ") > .full.nlf-between-center"
    await ActionsPage.hover_element(menu_option)
    const text = await ActionsPage.select(menu_option).innerText
    assert(text == option_text)
    await ActionsPage.click_element(kebab)
}

async function assert_kebab_file_download(option_text, option) {
    await ActionsPage.click_element(kebab)
    menu_option = "scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
    const text = await ActionsPage.select(menu_option).innerText
    assert(text == "Download")
    await ActionsPage.hover_element(menu_option)
    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(" + option + ") > .full.nlf-between-center"
    const text_2 = await ActionsPage.select(download_option).innerText
    assert(text_2 == option_text)
    await ActionsPage.hover_element(download_option)
    await ActionsPage.click_element(kebab)
}

async function assert_kebab_option(option, datatable) {
    //counting the columns
    data = datatable.raw()
    data_flat = data.flat()
    //counting the records
    const records = ActionsPage.select('td:nth-of-type(2)');
    const records_count = await records.count
    //i = records
    //n = columns
    var z = 0
    for (var i = 0; i < records_count; i++) {
        const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
        const text = await ActionsPage.select(record).innerText
        for (var n = 0; n < data_flat.length; n++) {
            if (text == data_flat[n]) {
                const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                const text = await ActionsPage.select(record).innerText
                if (text == data_flat[n + 1]) {
                    const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                    const text = await ActionsPage.select(record).innerText
                    if (text == data_flat[n + 2]) {
                        const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                        const text = await ActionsPage.select(record).innerText
                        if (text == data_flat[n + 3]) {
                            const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)"
                            const text = await ActionsPage.select(record).innerText
                            if (text == data_flat[n + 4]) {
                                kebab = ActionsPage.select("tbody .ng-star-inserted:nth-of-type(" + (i + 1) + ") scorpion-icon")
                                await ActionsPage.hover_element(kebab)
                                if (option == "send") {
                                    await assert_kebab_text("Send", "1")
                                    z = 1
                                }
                                if (option == "print") {
                                    await assert_kebab_text("Print", "2")
                                    z = 1
                                }
                                if (option == "download_PDF") {
                                    await assert_kebab_file_download(".PDF", "1")
                                    z = 1
                                }
                                if (option == "download_DOC") {
                                    await assert_kebab_file_download(".DOC", "2")
                                    z = 1
                                }
                                if (option == "download_CSV") {
                                    await assert_kebab_file_download(".CSV", "3")
                                    z = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (z != 1) {
        assert.ok(false)
    }
}

async function filter_invoices(filter, value) {
    if (filter == 'by_year') {
        await ActionsPage.click_element(BillingHistoryPageLocator.start_date())
        await ActionsPage.click_element(BillingHistoryPageLocator.by_year())
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.year_buttons(), value)
    }
    else if (filter == 'by_date') {
        dates = value.split('-')
        await ActionsPage.click_element(BillingHistoryPageLocator.start_date())
        await ActionsPage.click_element(BillingHistoryPageLocator.custom())
        await ActionsPage.type_text(BillingHistoryPageLocator.start_date(), dates[0])
        await ActionsPage.type_text(BillingHistoryPageLocator.end_date(), dates[1])
    }
    else if (filter == 'by_month') {
        month = value.split('-')
        await ActionsPage.click_element(BillingHistoryPageLocator.start_date())
        await ActionsPage.click_element(BillingHistoryPageLocator.by_month())
        // await ActionsPage.click_element_from_list(BillingHistoryPageLocator.month_buttons(), month[0] + "\n" + month[1]) 
        const record = BillingHistoryPageLocator.month_buttons()
        const text = await ActionsPage.select(record).innerText
        console.log(text)
        // await ActionsPage.click_element_from_list(BillingHistoryPageLocator.start_date(), dates[0])
    }
    else if (filter == 'by_price') {
        prices = value.split('-')
        await ActionsPage.type_text(BillingHistoryPageLocator.min_price(), prices[0])
        await ActionsPage.type_text(BillingHistoryPageLocator.max_price(), prices[1])
    }
    else if (filter == 'by_status') {
        if (value == 'Paid') {
            await ActionsPage.click_element(BillingHistoryPageLocator.paid_checkbox())
        }
        else if (value == 'Unpaid') {
            await ActionsPage.click_element(BillingHistoryPageLocator.unpaid_checkbox())
        }
        else if (value == 'Partially paid') {
            await ActionsPage.click_element(BillingHistoryPageLocator.partially_paid_checkbox())
        }

    }
}


module.exports = {
    assert_historical_invoices: assert_historical_invoices,
    assert_columns: assert_columns,
    assert_kebab_option: assert_kebab_option,
    filter_invoices: filter_invoices
};
