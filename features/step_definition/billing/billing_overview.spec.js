const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const BillingOverviewPage = require('../../../pages/billing/billing_overview.pages.js');
const BillingOverviewPageLocator = require('../../../locators/billing/billing_overview.locators.js')

When('I click on see all option', async function () {
    await ActionsPage.click_element(BillingOverviewPageLocator.billing_history())
})

Then('I verify the columns are shown on the billing overview page with', async function (datatable) {
    await BillingOverviewPage.assert_columns(datatable)
})

Then('I assert I can see recent invoices', async function () {
    await BillingOverviewPage.assert_recent_invoices()
    await ActionsPage.wait(5)
})

Then('I assert kebab options are visible for recent invoices', { timeout: 500000 }, async function () {
    await BillingOverviewPage.assert_kebab_options()
})
