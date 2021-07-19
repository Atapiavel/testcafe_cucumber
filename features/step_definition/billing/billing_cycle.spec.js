const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const BillingCyclePage = require('../../../pages/billing/billing_cycle.pages.js');

Then('I assert I can see the graph information', async function () {
    await BillingCyclePage.see_graph_details()
})
