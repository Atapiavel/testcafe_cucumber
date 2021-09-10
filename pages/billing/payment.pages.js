const assert = require("assert")
const ActionsPage = require("../actions.pages")
const PaymentPageLocator = require('../../locators/billing/payment.locators.js');

async function fill_payment_info(datatable) {
    data_flat = datatable.raw().flat()
    var name = data_flat[1]
    var name_on_card = data_flat[2]
    var card = data_flat[3]
    var expiration = data_flat[4]
    var cvc = data_flat[5]
    var zipcode = data_flat[6]
    await ActionsPage.fill_element_from_list(PaymentPageLocator.scorpion_input(), 'Payment Nickname', name)
    await ActionsPage.fill_element_from_list(PaymentPageLocator.scorpion_input(), 'Name on Card', name_on_card)
    await ActionsPage.fill_element(PaymentPageLocator.card(), card)
    await testController.pressKey(card)
    await ActionsPage.fill_element(PaymentPageLocator.card_expiration(), expiration)
    await testController.pressKey(expiration)
    await ActionsPage.fill_element(PaymentPageLocator.card_cvc(), cvc)
    await testController.pressKey(cvc)
    await ActionsPage.fill_element_from_list(PaymentPageLocator.scorpion_input(), 'Zip Code*', zipcode)
    await testController.wait(3000)
}

async function verify_payment_method(name) {
    const records = ActionsPage.select('scorpion-payment-method > ul > li > div > span');
    const records_count = await records.count
    var n = 0;
    for (var i = 0; i < records_count; i++) {
        const card_name = await ActionsPage.select('scorpion-payment-method > ul > li:nth-child(' + (i + 1) + ') > div > span').innerText
        if (card_name == name) {
            assert.ok(true)
            var n = 1;
            break;
        }
    }
    if (n != 1) {
        assert.ok(false)
    }
}

async function click_update_payment_method(name){
    const records = ActionsPage.select("scorpion-payment-method > ul > li > scorpion-popup-menu > button > scorpion-icon")
    const records_count = await records.count
    for(var i = 0; i < records_count; i++) {
        const card_name = await ActionsPage.select('scorpion-payment-method > ul > li:nth-child(' + (i + 1) + ') > div > span').innerText
        if (card_name == name){
            var kebab_option = ActionsPage.select('scorpion-payment-method > ul > li:nth-child(' + (i + 1) + ') > scorpion-popup-menu > button > scorpion-icon')
            await ActionsPage.click_element(kebab_option)
            await ActionsPage.click_element(PaymentPageLocator.update_option())
        }
    }
}

async function click_delete_payment_method(name){
    const records = ActionsPage.select("scorpion-payment-method > ul > li > scorpion-popup-menu > button > scorpion-icon")
    const records_count = await records.count
    for(var i = 0; i < records_count; i++) {
        const card_name = await ActionsPage.select('scorpion-payment-method > ul > li:nth-child(' + (i + 1) + ') > div > span').innerText
        if (card_name == name){
            var kebab_option = ActionsPage.select('scorpion-payment-method > ul > li:nth-child(' + (i + 1) + ') > scorpion-popup-menu > button > scorpion-icon')
            await ActionsPage.click_element(kebab_option)
            await ActionsPage.click_element(PaymentPageLocator.delete_option())
            await ActionsPage.click_element(PaymentPageLocator.confirm_delete())
        }
    }
}

async function update_payment_method(name){
    await ActionsPage.fill_element(PaymentPageLocator.payment_nickname(), name)
}

module.exports = {
    fill_payment_info: fill_payment_info,
    verify_payment_method: verify_payment_method,
    click_update_payment_method: click_update_payment_method,
    click_delete_payment_method: click_delete_payment_method,
    update_payment_method: update_payment_method
};
