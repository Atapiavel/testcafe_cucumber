const ActionsPage = require("../actions.pages")
var assert = require('assert');

// DATES VARIABLES
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

async function assert_recent_invoices() {
    var headers = await ActionsPage.bearer()
    var invoice_list = await ActionsPage.get_invoice_list(headers, 100)
    var number_of_invoices = invoice_list.data.getInvoiceList.totalCount
    var z = 0
    var invoice_arr = []
    for (var n = 0; n < number_of_invoices; n++) {
        let due_date = new Date(invoice_list.data.getInvoiceList.items[n].dueDate);
        let start_date = new Date(invoice_list.data.getInvoiceList.items[n].startDate)
        let end_date = new Date(invoice_list.data.getInvoiceList.items[n].endDate)
        const formattedDate = due_date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
        var filtering_date_start = prev_date
        var filtering_date_end = act_date
        if (due_date >= filtering_date_start && due_date <= filtering_date_end ||
            start_date >= filtering_date_start && start_date <= filtering_date_end ||
            end_date >= filtering_date_start && end_date <= filtering_date_end) {
            invoice_arr[z] =
            {
                date: formattedDate,
                number: invoice_list.data.getInvoiceList.items[n].invoiceNumber,
                period: invoice_list.data.getInvoiceList.items[n].billingFrequencyName,
                status: invoice_list.data.getInvoiceList.items[n].invoiceStatusName,
                amount: invoice_list.data.getInvoiceList.items[n].amountDue
            }

            z = z + 1
            var sorted = invoice_arr.sort(function (a, b) {
                var dateA = new Date(a.date), dateB = new Date(b.date);
                return dateA - dateB;
            }).reverse()
            var newArr = sorted.map(function (item) {
                return [item.date, item.number, item.period, item.status, item.amount]
            })
            for (var i = 0; i < 5; i++) {
                console.log(newArr)
                const date_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(1)"
                const number_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
                const period_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                const status_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                const amount_record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
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
    await ActionsPage.logoff(headers)
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
    console.log("Pending code (refactor)")
}

module.exports = {
    assert_recent_invoices: assert_recent_invoices,
    assert_columns: assert_columns,
    assert_kebab_option: assert_kebab_option
};
