const ActionsPage = require("../actions.pages")
const BillingHistoryPageLocator = require('../../locators/billing/invoice_history.locators.js');
const assert = require('assert');
const fs = require('fs');


// DATES VARIABLES
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);
var start_of_month = new Date(year, month, 1)
var end_of_month = new Date(year, month + 1, 0);
var start_date = 0
var end_date = 0
var months = {
    0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December",
}

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

async function assert_historical_invoices(headers, filter, value) {
    if (filter == "by_year") {
        var filtering_date_start = new Date(value, 0, 1)
        var filtering_date_end = new Date(value, 11, 31)
    }
    if (filter == "by_month") {
        if (value == "Actual") {
            var filtering_date_start = new Date(year, month, 1)
            var filtering_date_end = new Date(year, month + 1, 0)
        }
        else {
            var filtering_date_start = new Date(year, months[value], 1)
            var filtering_date_end = new Date(year, months[value] + 1, 0)
        }
    }
    if (filter == "-" || filter == "by_price" || filter == "by_status") {
        var filtering_date_start = prev_date
        var filtering_date_end = act_date
    }
    if (filter == "by_date") {
        if (value == "Actual") {
            var filtering_date_start = new Date(year, month, 1)
            var filtering_date_end = new Date(year, month, 28)
        }
        else {
            var dates_filter = value.split("-")
            var filtering_date_start = new Date(dates_filter[0])
            var filtering_date_end = new Date(dates_filter[1])
        }
    }
    var invoice_list = await ActionsPage.get_invoice_list(headers, 100)
    var number_of_invoices = invoice_list.data.getInvoiceList.totalCount
    var z = 0
    var invoice_arr = []
    for (var n = 0; n < number_of_invoices; n++) {
        let due_date = new Date(invoice_list.data.getInvoiceList.items[n].dueDate);
        let start_date = new Date(invoice_list.data.getInvoiceList.items[n].startDate)
        let end_date = new Date(invoice_list.data.getInvoiceList.items[n].endDate)
        let invoice_price = invoice_list.data.getInvoiceList.items[n].amountDue + invoice_list.data.getInvoiceList.items[n].amountPaid
        let invoice_status = invoice_list.data.getInvoiceList.items[n].invoiceStatusName
        const formattedDate = due_date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
        if (due_date >= filtering_date_start && due_date <= filtering_date_end ||
            start_date >= filtering_date_start && start_date <= filtering_date_end ||
            end_date >= filtering_date_start && end_date <= filtering_date_end) {
            if (filter == "by_price") {
                var prices = value.split("-")
                if (invoice_price >= prices[0] && invoice_price <= prices[1]) {
                    invoice_arr[z] =
                    {
                        date: formattedDate,
                        number: invoice_list.data.getInvoiceList.items[n].invoiceNumber,
                        period: invoice_list.data.getInvoiceList.items[n].billingFrequencyName,
                        status: invoice_list.data.getInvoiceList.items[n].invoiceStatusName,
                        amount: invoice_list.data.getInvoiceList.items[n].amountDue
                    }

                    z = z + 1
                    // if (z == number_of_invoices) {
                    var sorted = invoice_arr.sort(function (a, b) {
                        var dateA = new Date(a.date), dateB = new Date(b.date);
                        return dateA - dateB;
                    }).reverse()
                    var newArr = sorted.map(function (item) {
                        return [item.date, item.number, item.period, item.status, item.amount]
                    })
                    for (var i = 0; i < z; i++) {
                        console.log(newArr)
                        const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                        const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                        const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                        const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                        const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)"
                        var date_value = await ActionsPage.select(date_record).innerText;
                        var number_value = await ActionsPage.select(number_record).innerText;
                        var period_value = await ActionsPage.select(period_record).innerText;
                        var status_value = await ActionsPage.select(status_record).innerText;
                        var amount_value = await ActionsPage.select(amount_record).innerText;
                        var date_api_value = newArr[i][0]
                        var number_api_value = newArr[i][1]
                        var period_api_value = newArr[i][2]
                        var status_api_value = newArr[i][3]
                        var amount_api_value = formatter.format(newArr[i][4])
                        console.log(date_value + " - " + date_api_value)
                        console.log(number_value + " - " + number_api_value)
                        console.log(period_value + " - " + period_api_value)
                        console.log(status_value + " - " + status_api_value)
                        console.log(amount_value + " - " + amount_api_value + "\n")
                        assert(date_value == date_api_value)
                        assert(number_value == number_api_value)
                        assert(period_value == period_api_value)
                        assert(status_value == status_api_value)
                        assert(amount_value == amount_api_value)
                    }
                }
            }
            if (filter == "by_status") {
                if (invoice_status == value) {
                    invoice_arr[z] =
                    {
                        date: formattedDate,
                        number: invoice_list.data.getInvoiceList.items[n].invoiceNumber,
                        period: invoice_list.data.getInvoiceList.items[n].billingFrequencyName,
                        status: invoice_list.data.getInvoiceList.items[n].invoiceStatusName,
                        amount: invoice_list.data.getInvoiceList.items[n].amountDue
                    }

                    z = z + 1
                    // if (z == number_of_invoices) {
                    var sorted = invoice_arr.sort(function (a, b) {
                        var dateA = new Date(a.date), dateB = new Date(b.date);
                        return dateA - dateB;
                    }).reverse()
                    var newArr = sorted.map(function (item) {
                        return [item.date, item.number, item.period, item.status, item.amount]
                    })
                    for (var i = 0; i < z; i++) {
                        console.log(newArr)
                        const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                        const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                        const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                        const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                        const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)"
                        var date_value = await ActionsPage.select(date_record).innerText;
                        var number_value = await ActionsPage.select(number_record).innerText;
                        var period_value = await ActionsPage.select(period_record).innerText;
                        var status_value = await ActionsPage.select(status_record).innerText;
                        var amount_value = await ActionsPage.select(amount_record).innerText;
                        var date_api_value = newArr[i][0]
                        var number_api_value = newArr[i][1]
                        var period_api_value = newArr[i][2]
                        var status_api_value = newArr[i][3]
                        var amount_api_value = formatter.format(newArr[i][4])
                        console.log(date_value + " - " + date_api_value)
                        console.log(number_value + " - " + number_api_value)
                        console.log(period_value + " - " + period_api_value)
                        console.log(status_value + " - " + status_api_value)
                        console.log(amount_value + " - " + amount_api_value + "\n")
                        assert(date_value == date_api_value)
                        assert(number_value == number_api_value)
                        assert(period_value == period_api_value)
                        assert(status_value == status_api_value)
                        assert(amount_value == amount_api_value)
                    }
                }
            }
            else {
                invoice_arr[z] =
                {
                    date: formattedDate,
                    number: invoice_list.data.getInvoiceList.items[n].invoiceNumber,
                    period: invoice_list.data.getInvoiceList.items[n].billingFrequencyName,
                    status: invoice_list.data.getInvoiceList.items[n].invoiceStatusName,
                    amount: invoice_list.data.getInvoiceList.items[n].amountDue
                }

                z = z + 1
                // if (z == number_of_invoices) {
                var sorted = invoice_arr.sort(function (a, b) {
                    var dateA = new Date(a.date), dateB = new Date(b.date);
                    return dateA - dateB;
                }).reverse()
                var newArr = sorted.map(function (item) {
                    return [item.date, item.number, item.period, item.status, item.amount]
                })
                for (var i = 0; i < z; i++) {
                    console.log(newArr)
                    const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                    const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                    const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                    const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                    const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)"
                    var date_value = await ActionsPage.select(date_record).innerText;
                    var number_value = await ActionsPage.select(number_record).innerText;
                    var period_value = await ActionsPage.select(period_record).innerText;
                    var status_value = await ActionsPage.select(status_record).innerText;
                    var amount_value = await ActionsPage.select(amount_record).innerText;
                    var date_api_value = newArr[i][0]
                    var number_api_value = newArr[i][1]
                    var period_api_value = newArr[i][2]
                    var status_api_value = newArr[i][3]
                    var amount_api_value = formatter.format(newArr[i][4])
                    console.log(date_value + " - " + date_api_value)
                    console.log(number_value + " - " + number_api_value)
                    console.log(period_value + " - " + period_api_value)
                    console.log(status_value + " - " + status_api_value)
                    console.log(amount_value + " - " + amount_api_value + "\n")
                    assert(date_value == date_api_value)
                    assert(number_value == number_api_value)
                    assert(period_value == period_api_value)
                    assert(status_value == status_api_value)
                    assert(amount_value == amount_api_value)
                }
            }
        }
    }
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
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.filter_buttons(), "Years")
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.filter_buttons(), value)
    }
    else if (filter == 'by_date') {
        if (value == "Actual") {
            var date_filter_start = months[month].substring(0, 3) + " " + 1 + " " + year
            var date_filter_end = months[month].substring(0, 3) + " " + 28 + " " + year
        }
        else {
            var dates_filter = value.split("-")
            var date_filter_start = dates_filter[0]
            var date_filter_end = dates_filter[1]
        }
        await ActionsPage.click_element(BillingHistoryPageLocator.start_date())
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.filter_buttons(), "Custom")
        await ActionsPage.type_text(BillingHistoryPageLocator.start_date(), date_filter_start)
        await ActionsPage.type_text(BillingHistoryPageLocator.end_date(), date_filter_end)
    }
    else if (filter == 'by_month') {
        if (value == "Actual") {
            var month_filter = months[month]
        }
        else {
            var month_filter = months[value]
        }
        await ActionsPage.click_element(BillingHistoryPageLocator.start_date())
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.filter_buttons(), "Months")
        await ActionsPage.click_element_from_list(BillingHistoryPageLocator.months_buttons(), month_filter)
    }
    else if (filter == 'by_price') {
        prices = value.split('-')
        await ActionsPage.click_element(BillingHistoryPageLocator.filter_button())
        await ActionsPage.type_text(BillingHistoryPageLocator.min_price(), prices[0])
        await ActionsPage.type_text(BillingHistoryPageLocator.max_price(), prices[1])
    }
    else if (filter == 'by_status') {
        await ActionsPage.click_element(BillingHistoryPageLocator.filter_button())
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
