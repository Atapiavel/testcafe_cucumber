const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const PaymentPage = require('../../../pages/billing/payment.pages.js');
const PaymentPageLocator = require('../../../locators/billing/payment.locators.js');

When('I click on add payment method', async function () {
    await ActionsPage.hover_element(PaymentPageLocator.add_payment_button())
    await ActionsPage.click_element(PaymentPageLocator.add_payment_button())
})

When('I select the payment method with {string}', async function (payment_method) {
    await ActionsPage.click_element(PaymentPageLocator.select_payment_method())
    await ActionsPage.click_element_from_list(PaymentPageLocator.payment_method_item(), payment_method)
})

When('I click on continue button', async function () {
    await ActionsPage.click_element_from_list(PaymentPageLocator.payment_buttons(), 'Continue')
})

Then('I fill payment method information with', async function (datatable) {
    await PaymentPage.fill_payment_info(datatable)
})