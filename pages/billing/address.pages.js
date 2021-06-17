const ActionsPage = require("../actions.pages")
const AddressPageLocator = require('../../locators/billing/address.locators.js');

async function fill_address_info(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    await ActionsPage.type_text(AddressPageLocator.address_1(), data_flat[0])
    await ActionsPage.type_text(AddressPageLocator.address_2(), data_flat[1])
    await ActionsPage.type_text(AddressPageLocator.city(), data_flat[2])
    await ActionsPage.click_element(AddressPageLocator.state())
    await ActionsPage.hover_element_from_list(AddressPageLocator.options(), data_flat[3])
    await ActionsPage.click_element_from_list(AddressPageLocator.options(), data_flat[3])
    await ActionsPage.type_text(AddressPageLocator.zipcode(), data_flat[4])
}

module.exports = {
    fill_address_info: fill_address_info,
};
