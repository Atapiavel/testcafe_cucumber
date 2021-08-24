const ActionsPage = require("../actions.pages")
const PaymentPageLocator = require('../../locators/billing/payment.locators.js');

async function fill_payment_info(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    await ActionsPage.fill_element_from_list(PaymentPageLocator.name(), 'Payment Nickname', data_flat[1])
    await ActionsPage.fill_element_from_list(PaymentPageLocator.name(), 'Name on Card', data_flat[2])
    await ActionsPage.click_element_from_list(PaymentPageLocator.card(), 'Card Number*')
    await testController.pressKey('4 2 4 2 4 2')
    await ActionsPage.fill_element_from_list(PaymentPageLocator.card(), 'Expiration', data_flat[4])
    await ActionsPage.fill_element_from_list(PaymentPageLocator.card(), 'CVV (Security code)*', data_flat[5])
}

module.exports = {
    fill_payment_info: fill_payment_info,
};
