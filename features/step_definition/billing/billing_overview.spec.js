const ActionsPage = require('../../../pages/actions.pages.js')
const { When } = require('@cucumber/cucumber');
const BillingPageLocator = require('../../../locators/billing/billing_overview.locators.js');

When('I click on see all option', async function(){
    ActionsPage.click_element(BillingPageLocator.billing_history())
})