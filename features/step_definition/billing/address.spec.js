const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const AddressPage = require('../../../pages/billing/address.pages.js');
const AddressPageLocator = require('../../../locators/billing/address.locators.js');
var assert = require('assert');


Then('I assert address module is visible', async function () {
    await ActionsPage.hover_element(AddressPageLocator.address_main_title())
    const element = ActionsPage.select(AddressPageLocator.address_main_title());
    await testController.expect(element.exists).ok();
})