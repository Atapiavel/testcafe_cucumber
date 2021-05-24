const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../../pages/actions.pages.js')
const BillingHistoryPage = require('../../../pages/billing/invoice_history.pages.js');
const BillingHistoryPageLocator = require('../../../locators/billing/invoice_history.locators.js');
const { Selector } = require('testcafe');
var assert = require('assert');

When('I assert the Scorpion Billing History page', async function () {
    const text = await ActionsPage.ActionsPage.select(BillingHistoryPageLocator.page_title()).innerText;
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

When('I select the filter {string} with {string}', async function (filter, value) {
    await BillingHistoryPage.filter_invoices(filter, value)
})


Then('I assert no invoices are shown', async function () {
    const text = await ActionsPage.select(BillingHistoryPageLocator.no_results()).innerText;
    assert(text == "Sorry, we couldn´t find any matches.")
})

When('I click on apply button', async function () {
    await ActionsPage.click_element_from_list(BillingHistoryPageLocator.apply_button(), "Apply")
})

Then('I assert the results count showing {string}', async function (results) {
    const text = await ActionsPage.select(BillingHistoryPageLocator.results_count()).innerText;
    assert(text == results)
}) 

Then('I click on clear all filters button', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.clear_all_filters())
})

Then('I click on filter button', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.filter_button())
})

Then('I click on cancel button', async function () {
    await ActionsPage.click_element_from_list(BillingHistoryPageLocator.apply_button(), "Cancel")
})

Then('I click on clear all filters link', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.clear_all_filters())
}) 