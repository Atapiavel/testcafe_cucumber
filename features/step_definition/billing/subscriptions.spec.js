const SubscriptionsPage = require('../../../pages/billing/subscriptions.pages.js');
const { Then, When } = require('@cucumber/cucumber');

Then('I verify the columns for subscriptions are visible', async function (datatable) {
    await SubscriptionsPage.assert_columns(datatable)
})

Then('I assert that subscriptions information is visible', async function () {
    await SubscriptionsPage.assert_subscriptions_data()
})

When('I select the first contract to edit with the {string} payment method and {string} autopay', async function (payment_method, autopay) {
    await SubscriptionsPage.edit_contract(payment_method, autopay)
})