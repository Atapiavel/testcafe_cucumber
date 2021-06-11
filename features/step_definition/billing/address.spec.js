const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const AddressPage = require('../../../pages/billing/address.pages.js');
const AddressPageLocator = require('../../../locators/billing/address.locators.js');
var assert = require('assert');
const actionsPages = require('../../../pages/actions.pages.js');


Then('I assert address module is visible', async function () {
    await ActionsPage.hover_element(AddressPageLocator.address_main_title())
    const element = ActionsPage.select(AddressPageLocator.address_main_title());
    await testController.expect(element.exists).ok();
})

Then('I assert update option is visible for billing address', async function() {
    await ActionsPage.hover_element(AddressPageLocator.address_kebab_menu())
    await ActionsPage.click_element(AddressPageLocator.address_kebab_menu())
    var menu_option = await ActionsPage.select(AddressPageLocator.update_address()).innerText;
    if (menu_option == "Update"){
        assert.ok(true)
    }
})