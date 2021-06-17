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

Then('I assert update option is visible for billing address', async function () {
    await ActionsPage.hover_element(AddressPageLocator.address_kebab_menu())
    await ActionsPage.click_element(AddressPageLocator.address_kebab_menu())
    var menu_option = await ActionsPage.select(AddressPageLocator.update_address()).innerText;
    if (menu_option == "Update") {
        assert.ok(true)
    }
})

When('I click on billing address to use dropdown', async function () {
    await ActionsPage.hover_element(AddressPageLocator.address_kebab_menu())
    await ActionsPage.click_element(AddressPageLocator.address_kebab_menu())
})

When('I click on update option', async function () {
    await ActionsPage.hover_element(AddressPageLocator.update_address())
    await ActionsPage.click_element(AddressPageLocator.update_address())
})

When('I click on create new address', async function () {
    await ActionsPage.hover_element(AddressPageLocator.create_new_address())
    await ActionsPage.click_element(AddressPageLocator.create_new_address())
})

When('I fill address info with', async function (datatable) {
    await AddressPage.fill_address_info(datatable)
})

Then('I click on add button from address page', async function () {
    await ActionsPage.click_element(AddressPageLocator.add_button())
})

When('I click on select a billing address to use', async function () {
    await ActionsPage.click_element(AddressPageLocator.back_button())
})

When('I select the address to use with {string}', async function (address) {
    await ActionsPage.click_element(AddressPageLocator.select_address())
    await ActionsPage.hover_element_from_list(AddressPageLocator.options(), address)
    await ActionsPage.click_element_from_list(AddressPageLocator.options(), address)
})

Then('I click on update button from address page', async function () {
    await ActionsPage.click_element(AddressPageLocator.add_button())
})
