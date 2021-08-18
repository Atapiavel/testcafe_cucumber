const SubscriptionsLocator = require('../../locators/billing/subscriptions.locators');
const ActionsPage = require("../actions.pages")
var assert = require('assert');

async function assert_columns(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "scorpion-billing-subscriptions > table[role='grid'] > thead > tr[role='row'] > th:nth-of-type(" + (i + 1) + ")"
        const text = await ActionsPage.select(header).innerText
        if(text == data_flat[i]){
            assert.ok(true)
        }
        else{
            console.log(text + " - " + data_flat[i])
            assert.ok(false)
        }
    }
}

async function assert_subscriptions_data() {
    var headers = await ActionsPage.bearer()
    var subscriptions_list = await ActionsPage.get_all_subscriptions(headers)
    await ActionsPage.logoff(headers)
    for (var i = 0; i < subscriptions_list.data.getAllSubscriptions.length; i++) {
        // API Data & Variables
        var sub_start_date = await ActionsPage.format_date(subscriptions_list.data.getAllSubscriptions[i].item1.subscriptionStartDate)
        var sub_start_day = sub_start_date.getDate()
        var sub_start_month = sub_start_date.getMonth()
        var sub_start_year = sub_start_date.getFullYear()
        var sub_end_date = await ActionsPage.format_date(subscriptions_list.data.getAllSubscriptions[i].item1.subscriptionEndDate)
        var sub_end_day = sub_end_date.getDate()
        var sub_end_month = sub_end_date.getMonth()
        var sub_end_year = sub_end_date.getFullYear()
        var api_assigned_payment = subscriptions_list.data.getAllSubscriptions[i].item2.friendlyName
        var months = {
            0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December",
        }
        var sub_end_month = months[sub_end_month]
        var api_valid_until = sub_end_month + " " + sub_end_day + ", " + sub_end_year
        if (subscriptions_list.data.getAllSubscriptions[i].item1.friendlyName == null) {
            if (sub_start_month.toString().length < 2) {
                sub_start_month = "0" + (sub_start_month + 1)
            }
            if (sub_start_day.toString().length < 2) {
                sub_start_day = "0" + sub_start_day
            }
            var api_contract_name = "Contract " + sub_start_month + "/" + sub_start_day + "/" + sub_start_year
        }
        else {
            var api_contract_name = subscriptions_list.data.getAllSubscriptions[i].item1.friendlyName
        }
        if (subscriptions_list.data.getAllSubscriptions[i].item1.autopay == true) {
            var api_autopay = "On"
        }
        else {
            var api_autopay = "Off"
        }
        // FE Values
        var fe_contract_name = await ActionsPage.get_text(SubscriptionsLocator.contract_names() + i)
        var fe_valid_until = await ActionsPage.get_text(SubscriptionsLocator.valid_until() + i)
        var fe_assigned_payment = await ActionsPage.get_text(SubscriptionsLocator.assigned_payments() + i)
        var fe_autopay = await ActionsPage.get_text(SubscriptionsLocator.autopay() + i)
        // Assertions
        if(api_contract_name == fe_contract_name){
            assert.ok(true)
        }
        else{
            console.log(api_contract_name == fe_contract_name)
            assert.ok(false)
        }
        if(api_valid_until == fe_valid_until){
            assert.ok(true)
        }
        else{
            console.log(api_valid_until == fe_valid_until)
            assert.ok(false)
        }
        if(api_assigned_payment == fe_assigned_payment){
            assert.ok(true)
        }
        else{
            console.log(api_assigned_payment == fe_assigned_payment)
            assert.ok(false)
        }
        if(api_autopay == fe_autopay){
            assert.ok(true)
        }
        else{
            console.log(api_autopay == fe_autopay)
            assert.ok(false)
        }
    }
}

async function edit_contract(payment_method, autopay) {
    await ActionsPage.hover_element(SubscriptionsLocator.kebab_options() + "0")
    await ActionsPage.click_element(SubscriptionsLocator.kebab_options() + "0")
    await ActionsPage.hover_element(SubscriptionsLocator.edit_options() + "0")
    await ActionsPage.click_element(SubscriptionsLocator.edit_options() + "0")
    await ActionsPage.hover_element(SubscriptionsLocator.open_dropdown())
    await ActionsPage.click_element(SubscriptionsLocator.open_dropdown())
    var headers = await ActionsPage.bearer()
    var subscriptions_list = await ActionsPage.get_all_subscriptions(headers)
    var payment_methods_list = await ActionsPage.get_payment_methods(headers)
    if (payment_method == "first") {
        var payment_method_id = 0
        var friendly_name = payment_methods_list.data.getPaymentMethods[0].friendlyName
    }
    if (payment_method == "last") {
        var payment_methods_lenght = payment_methods_list.data.getPaymentMethods.length
        var payment_method_id = payment_methods_lenght - 1
        var friendly_name = payment_methods_list.data.getPaymentMethods[payment_method_id].friendlyName
    }
    await ActionsPage.hover_element_from_list(SubscriptionsLocator.payment_methods(), friendly_name)
    await ActionsPage.click_element_from_list(SubscriptionsLocator.payment_methods(), friendly_name)
    await ActionsPage.logoff(headers)
    if (subscriptions_list.data.getAllSubscriptions[0].item1.autopay == false && autopay == "On" ||
        subscriptions_list.data.getAllSubscriptions[0].item1.autopay == true && autopay == "Off") {
        await ActionsPage.click_element(SubscriptionsLocator.autopay_switch())
    }
    await ActionsPage.click_element(SubscriptionsLocator.save_subscription())
}

module.exports = {
    assert_columns: assert_columns,
    assert_subscriptions_data: assert_subscriptions_data,
    edit_contract: edit_contract
}