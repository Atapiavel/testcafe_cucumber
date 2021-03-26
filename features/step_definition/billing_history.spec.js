const ActionsPage = require('../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const BillingHistoryPage = require('../../pages/billing_history.pages.js');
const BillingPageLocator = require('../../locators/billing.locators');
const BillingHistoryPageLocator = require('../../locators/billing_history.locators.js');
const { Selector } = require('testcafe');
var assert = require('assert');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

When('I assert the Scorpion Billing History page', async function () {
    // Asserts.assert_text(BillingHistoryPageLocator.page_title(), "Hello bad assert")
    const text = await select(BillingHistoryPageLocator.page_title()).innerText;
    assert(text == "Billing History")
})

When('I assert I can see historical invoices with', async function (datatable) {
    data = datatable.raw()
    for (var n = 0; n < data.length; n++) {
        for (var i = 0; i < data[n].length; i++) {
            const record = "tr:nth-of-type(" + (n + 1) + ") > td:nth-of-type(" + (i + 1) + ")"
            const text = await select(record).innerText
            assert(text == data[n][i])
        }
    }
})

When('I verify the tiles are showed with', async function (datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "tr[role='row'] > th:nth-of-type(" + (i + 1) + ")"
        const text = await select(header).innerText
        assert(text == data_flat[i])
    }
})
