const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const BillingOverviewPage = require('../../../pages/billing/billing_overview.pages.js');

When('I click on see all option', async function () {
    await ActionsPage.click_element(BillingPageLocator.billing_history())
})

When('I verify the columns are showed in billing overview with', async function (datatable) {
    await BillingOverviewPage.assert_columns(datatable)
})

Then('I assert I can see recent invoices with', async function (datatable) {
    await BillingOverviewPage.assert_recent_invoices(datatable)
})

Then('I assert {string} kebab option is visible on the billing overview page for', async function (option, datatable) {
    await BillingOverviewPage.assert_kebab_option(option, datatable)
})