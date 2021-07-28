const SubscriptionsLocator = require('../../locators/billing/subscriptions.locators');
const ActionsPage = require("../actions.pages")
var assert = require('assert');

async function assert_columns(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    for (var i = 0; i < data_flat.length; i++) {
        const header = "scorpion-billing-subscriptions > table[role='grid'] > thead > tr[role='row'] > th:nth-of-type(" + (i + 1) + ")"
        const text = await ActionsPage.select(header).innerText
        assert(text == data_flat[i])
    }
}

async function assert_subscriptions_data() {
    var headers = await ActionsPage.bearer()
    var subscriptions_list = await ActionsPage.get_all_subscriptions(headers)
    for (var i = 0; i < subscriptions_list.data.getAllSubscriptions.length; i++) {
        // API Data & Variables
        var sub_start_date = await ActionsPage.format_date(subscriptions_list.data.getAllSubscriptions[i].item1.subscriptionStartDate)
        var sub_start_day = sub_start_date.getDate()
        var sub_start_month =sub_start_date.getMonth()
        var sub_start_year = sub_start_date.getFullYear()
        var sub_end_date = await ActionsPage.format_date(subscriptions_list.data.getAllSubscriptions[i].item1.subscriptionEndDate)
        var sub_end_day = sub_end_date.getDate()
        var sub_end_month =sub_end_date.getMonth()
        var sub_end_year = sub_end_date.getFullYear()
        var api_assigned_payment = subscriptions_list.data.getAllSubscriptions[i].item2.friendlyName
        var months = {
            0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December",
        }
        var sub_end_month = months[sub_end_month]
        var api_valid_until = sub_end_month + " " + sub_end_day + ", " + sub_end_year
        if (subscriptions_list.data.getAllSubscriptions[i].item1.friendlyName == null){
            if (sub_start_month.toString().length < 2) {
                sub_start_month = "0" + (sub_start_month + 1)
            }
            if (sub_start_day.toString().length < 2) {
                sub_start_day = "0" + sub_start_day
            }
            var api_contract_name = "Contract " + sub_start_month + "/" + sub_start_day + "/" + sub_start_year
        }
        else{
            var api_contract_name = subscriptions_list.data.getAllSubscriptions[i].item1.friendlyName
        }
        if(subscriptions_list.data.getAllSubscriptions[i].item1.autopay == true){
            var api_autopay = "On"
        }
        else{
            var api_autopay = "Off"
        }
        // FE Values
        var fe_contract_name = await ActionsPage.get_text(SubscriptionsLocator.contract_names() + i) 
        var fe_valid_until = await ActionsPage.get_text(SubscriptionsLocator.valid_until() + i)
        var fe_assigned_payment = await ActionsPage.get_text(SubscriptionsLocator.assigned_payments() + i)
        var fe_autopay = await ActionsPage.get_text(SubscriptionsLocator.autopay() + i) 
        // Assertions
        assert(api_contract_name==fe_contract_name)
        assert(api_valid_until==fe_valid_until)
        assert(api_assigned_payment==fe_assigned_payment)
        assert(api_autopay==fe_autopay)
    }
    await ActionsPage.logoff(headers)
}

module.exports = {
    assert_columns: assert_columns,
    assert_subscriptions_data: assert_subscriptions_data
}