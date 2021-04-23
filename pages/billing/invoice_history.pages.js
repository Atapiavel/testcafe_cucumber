const ActionsPage = require("../actions.pages")
const BillingHistoryPageLocator = require('../../locators/billing/invoice_history.locators.js');
const { Selector } = require('testcafe');
var assert = require('assert');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

async function assert_historical_invoices(datatable) {
    data = datatable.raw()
    for (var n = 0; n < data.length; n++) {
        for (var i = 0; i < data[n].length; i++) {
            const record = "tr:nth-of-type(" + (n + 1) + ") > td:nth-of-type(" + (i + 2) + ")"
            const text = await select(record).innerText
            assert(text == data[n][i])
        }
    }
}

async function assert_columns(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "tr[role='row'] > th:nth-of-type(" + (i + 2) + ")"
        const text = await select(header).innerText
        assert(text == data_flat[i])
    }
}

async function assert_kebab_text(option_text, option){                  
    await ActionsPage.click_element(kebab)
    menu_option = "scorpion-menu-item:nth-of-type(" + option + ") > .full.nlf-between-center"
    await ActionsPage.hover_element(menu_option)
    const text = await select(menu_option).innerText
    assert(text == option_text)
    await ActionsPage.click_element(kebab)
}

async function assert_kebab_file_download(option_text, option){
    await ActionsPage.click_element(kebab)
    menu_option = "scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
    const text = await select(menu_option).innerText
    assert(text == "Download")
    await ActionsPage.hover_element(menu_option)
    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(" + option + ") > .full.nlf-between-center"
    const text_2 = await select(download_option).innerText
    assert(text_2 == option_text)
    await ActionsPage.hover_element(download_option)
    await ActionsPage.click_element(kebab)
}

async function assert_kebab_option(option, datatable) {
    //counting the columns
    data = datatable.raw()
    data_flat = data.flat()
    //counting the records
    const records = select('td:nth-of-type(2)');
    const records_count = await records.count
    //i = records
    //n = columns
    for (var i = 0; i < records_count; i++) {
        const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(2)"
        const text = await select(record).innerText
        for (var n = 0; n < data_flat.length; n++) {
            if (text == data_flat[n]) {
                const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(3)"
                const text = await select(record).innerText
                if (text == data_flat[n + 1]) {
                    const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(4)"
                    const text = await select(record).innerText
                    if (text == data_flat[n + 2]) {
                        const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(5)"
                        const text = await select(record).innerText
                        if (text == data_flat[n + 3]) {
                            const record = "tr:nth-of-type(" + (i + 1) + ") > td:nth-of-type(6)"
                            const text = await select(record).innerText
                            if (text == data_flat[n + 4]) {
                                kebab = select("tbody .ng-star-inserted:nth-of-type(" + (i + 1) + ") scorpion-icon")
                                await ActionsPage.hover_element(kebab)
                                if (option == "send") {
                                    await assert_kebab_text("Send","1")
                                }
                                if (option == "print") {
                                    await assert_kebab_text("Print","2")
                                }
                                if (option == "download_PDF") {
                                    await assert_kebab_file_download(".PDF", "1")
                                }
                                if (option == "download_DOC") {
                                    await assert_kebab_file_download(".DOC", "2")
                                }
                                if (option == "download_CSV") {
                                    await assert_kebab_file_download(".CSV", "3")
                                }
                            }
                        }
                    }
                }
            }
        }
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
        const text = await select(record).innerText
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
