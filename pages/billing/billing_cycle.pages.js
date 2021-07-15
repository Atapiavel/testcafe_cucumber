const BillingCycleLocator = require('../../locators/billing/billing_cycle.locators');
const ActionsPage = require("../actions.pages")
const fetch = require("node-fetch");
const Requests = require("../../api/billing/requests");

var username = "commcenter@scorpion.co"
var password = "Comms1234!"
// var username = "thebillingteam@scorpion.co"
// var password = "Billing1234!!"

// URL's
const url = "https://integration.scorpion.co/csx/billing/graphql"
const base_url = 'https://integration.scorpion.co'
const loginUrl = base_url + "/platform/identity/v1/api/oauth2/login2";
const authorizeUrl = base_url + "/platform/identity/v1/api/oauth2/ropc/authorize";
const logoff_url = base_url + "/platform/identity/v1/api/oauth2logoff/logoff"

// HEADERS & BODIES
const auth_headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}
const loginBody = {
    client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
    password,
    username,
};

// DATES VARIABLES
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();

async function see_graph_details() {
    var start_of_month = new Date(year, month, 1)
    var end_of_month = new Date(year, month + 1, 0);
    var current_unpaid_amount = 0
    var amount_due = 0
    var past_amount_due = 0
    var amount_paid = 0
    var current_amount = 0
    // Login API
    fetch(loginUrl, {
        method: 'POST',
        headers: auth_headers,
        body: JSON.stringify(loginBody)
    })
        .then(r => r.json())
        .then((accessToken) => {
            if (typeof window !== "undefined") {
                window.localStorage.clear();
                window.localStorage.setItem('platform.auth-access-token', JSON.stringify(accessToken))
            }
            const authorizeBody = {
                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                code: accessToken.result,
            };
            // Authorization API
            fetch(authorizeUrl, {
                method: 'POST',
                headers: auth_headers,
                body: JSON.stringify(authorizeBody)
            })
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    var bearer = String(data.id_token)
                    const headers = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + bearer
                    }
                    // Invoice List API
                    fetch(url, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            query: Requests.getInvoiceList(100),
                        })
                    })
                        .then(r => r.json())
                        .then(data => {
                            console.log(data)
                            var i = data.data.getInvoiceList.items.length
                            for (var n = 0; n < i; n++) {
                                // console.log(data.data.getInvoiceList.items[n].invoiceNumber + ":" + data.data.getInvoiceList.items[n].amountDue + ":" + data.data.getInvoiceList.items[n].amountPaid)
                                var amount = data.data.getInvoiceList.items[n].amountDue
                                var amount_paid_aux = data.data.getInvoiceList.items[n].amountPaid
                                var due_date = new Date(data.data.getInvoiceList.items[n].dueDate)
                                if (due_date <= end_of_month) {
                                    amount_due = amount_due + amount
                                }
                                if (due_date < start_of_month) {
                                    past_amount_due = past_amount_due + amount
                                }
                                if (due_date >= start_of_month && due_date <= end_of_month) {
                                    current_unpaid_amount = current_unpaid_amount + amount
                                    current_amount = current_amount + amount_paid_aux + amount
                                }
                                amount_paid = amount_paid + amount_paid_aux
                            }
                            console.log("amountDue: " + amount_due)
                            console.log("amountPaid: " + amount_paid)
                            console.log("estimate: " + current_amount)
                            console.log("pastAmountDue: " + past_amount_due)
                            console.log("unpaidEstimate: " + current_unpaid_amount)
                            fetch(url, {
                                method: 'POST',
                                headers: headers,
                                body: JSON.stringify({
                                    query: Requests.getAccountMonies(0),
                                })
                            })
                                .then(r => r.json())
                                .then(data => {
                                    var availableCredit = data.data.getAccountMonies[0].amount
                                    console.log("availableCredit: " + availableCredit)
                                });
                            var billing_cycle_title = ActionsPage.select(BillingCycleLocator.billing_cycle_title()).innerText
                            var date_range = ActionsPage.select(BillingCycleLocator.date_range()).innerText
                            var estimate_value = ActionsPage.select(BillingCycleLocator.estimate_value()).innerText
                            var estimate_text = ActionsPage.select(BillingCycleLocator.estimate_text()).innerText
                            var bar_desc_1 = ActionsPage.select(BillingCycleLocator.bar_desc_1()).innerText
                            var bar_desc_2 = ActionsPage.select(BillingCycleLocator.bar_desc_2()).innerText
                            var bar_desc_3 = ActionsPage.select(BillingCycleLocator.bar_desc_3()).innerText
                            var total_balance_due_value = ActionsPage.select(BillingCycleLocator.total_balance_due_value()).innerText
                            var credit_available_value = ActionsPage.select(BillingCycleLocator.credit_available_value()).innerText
                            console.log(billing_cycle_title)
                            console.log(date_range)
                            console.log(estimate_value)
                            console.log(estimate_text)
                            console.log(bar_desc_1)
                            console.log(bar_desc_2)
                            console.log(bar_desc_3)
                            console.log(total_balance_due_value)
                            console.log(credit_available_value)
                            console.log(data.data.getInvoiceList)
                        })
                    fetch(logoff_url, {
                        method: 'POST',
                        headers: headers
                    })
                }
                )
        })
}

module.exports = {
    see_graph_details: see_graph_details,
}