const { When, Then } = require('@cucumber/cucumber');
const BillingHistoryPage = require('../../../pages/billing/invoice_history.pages.js');
const BillingHistoryPageLocator = require('../../../locators/billing/invoice_history.locators.js');
const { Selector } = require('testcafe');
var assert = require('assert');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

When('I assert the Scorpion Billing History page', async function () {
    const text = await select(BillingHistoryPageLocator.page_title()).innerText;
    assert(text == "Billing History")
})

When('I assert I can see historical invoices with', async function (datatable) {
    await BillingHistoryPage.assert_historical_invoices(datatable)
})

When('I verify the columns are showed with', async function (datatable) {
    await BillingHistoryPage.assert_columns(datatable)
})

Then('I assert {string} kebab option is visible for', async function (option, datatable) {
    await BillingHistoryPage.assert_kebab_option(option, datatable)
})