const SubscriptionsPage = require('../../../pages/billing/subscriptions.pages.js');
const { Then } = require('@cucumber/cucumber');

Then('I verify the columns for subscriptions are visible', async function (datatable) {
    await SubscriptionsPage.assert_columns(datatable)
})

Then('I assert that subscriptions information is visible', async function () {
    await SubscriptionsPage.assert_subscriptions_data()
})