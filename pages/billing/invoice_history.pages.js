const ActionsPage = require("../actions.pages");
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

async function assert_kebab_option(option, datatable) {
    //counting the columns
    data = datatable.raw()
    data_flat = data.flat()
    //counting the records
    const records = select('td:nth-of-type(2)');
    const records_count = await records.count
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
                                if (option == "send"){
                                    await ActionsPage.click_element(kebab)
                                    menu_option = "scorpion-menu-item:nth-of-type(1) > .full.nlf-between-center"
                                    await ActionsPage.hover_element(menu_option)
                                    const text = await select(menu_option).innerText
                                    assert(text == "Send")
                                    await ActionsPage.click_element(kebab)
                                }
                                if (option == "print"){
                                    await ActionsPage.click_element(kebab)
                                    menu_option = "scorpion-menu-item:nth-of-type(2) > .full.nlf-between-center"
                                    await ActionsPage.hover_element(menu_option)
                                    const text = await select(menu_option).innerText
                                    assert(text == "Print")
                                    await ActionsPage.click_element(kebab)
                                }
                                if (option == "download_PDF"){
                                    await ActionsPage.click_element(kebab)
                                    menu_option = "scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
                                    const text = await select(menu_option).innerText
                                    assert(text == "Download")
                                    await ActionsPage.hover_element(menu_option)
                                    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(1) > .full.nlf-between-center"
                                    const text_2 = await select(download_option).innerText
                                    assert(text_2 == ".PDF")
                                    await ActionsPage.hover_element(download_option)
                                    await ActionsPage.click_element(kebab)
                                }
                                if (option == "download_DOC"){
                                    await ActionsPage.click_element(kebab)
                                    menu_option = "scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
                                    const text = await select(menu_option).innerText
                                    assert(text == "Download")
                                    await ActionsPage.hover_element(menu_option)
                                    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(2) > .full.nlf-between-center"
                                    const text_2 = await select(download_option).innerText
                                    assert(text_2 == ".DOC")
                                    await ActionsPage.hover_element(download_option)
                                    await ActionsPage.click_element(kebab)
                                }
                                if (option == "download_CSV"){
                                    await ActionsPage.click_element(kebab)
                                    menu_option = "scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
                                    const text = await select(menu_option).innerText
                                    assert(text == "Download")
                                    await ActionsPage.hover_element(menu_option)
                                    download_option = "[data-cy=nested-popup-menu-list] > scorpion-menu-item:nth-of-type(3) > .full.nlf-between-center"
                                    const text_2 = await select(download_option).innerText
                                    assert(text_2 == ".CSV")
                                    await ActionsPage.hover_element(download_option)
                                    await ActionsPage.click_element(kebab)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


module.exports = {
    assert_historical_invoices: assert_historical_invoices,
    assert_columns: assert_columns,
    assert_kebab_option: assert_kebab_option
};
