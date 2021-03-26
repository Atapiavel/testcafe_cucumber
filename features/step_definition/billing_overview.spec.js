const ActionsPage = require('../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const BillingHistoryPage = require('../../pages/billing_history.pages.js');
const BillingPageLocator = require('../../locators/billing.locators');
const BillingHistoryPageLocator = require('../../locators/billing_history.locators');
const Asserts = require('../support/asserts.js');

When('I click on see all option', async function(){
    ActionsPage.click_element(BillingPageLocator.billing_history())
})