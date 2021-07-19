const BillingCycleLocator = require('../../locators/billing/billing_cycle.locators');
const ActionsPage = require("../actions.pages")
const fetch = require("node-fetch");
const Requests = require("../../api/billing/requests");
const assert = require('assert');

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
                            var i = data.data.getInvoiceList.items.length
                            for (var n = 0; n < i; n++) {
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
                            async function assert_graph() {
                                var formatter = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                });
                                const formatted_start_of_month = start_of_month.toLocaleString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                                const formatted_end_of_month = end_of_month.toLocaleString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                                var actual_range = formatted_start_of_month + " - " + formatted_end_of_month
                                var billing_cycle_title = await ActionsPage.select(BillingCycleLocator.billing_cycle_title()).innerText
                                var date_range = await ActionsPage.select(BillingCycleLocator.date_range()).innerText
                                var estimate_value = await ActionsPage.select(BillingCycleLocator.estimate_value()).innerText
                                var estimate_text = await ActionsPage.select(BillingCycleLocator.estimate_text()).innerText
                                var total_balance_due_value = await ActionsPage.select(BillingCycleLocator.total_balance_due_value()).innerText
                                await ActionsPage.wait(1)
                                assert(estimate_value == formatter.format(current_amount))
                                assert(total_balance_due_value == formatter.format(amount_due))
                                assert(actual_range == date_range)
                                assert(billing_cycle_title == "Monthly Billing Cycle")
                                assert(estimate_text == "ESTIMATE")
                            }
                            assert_graph()
                        })
                    fetch(url, {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify({
                            query: Requests.getAccountMonies(1),
                        })
                    })
                        .then(r => r.json())
                        .then(data => {
                            async function assert_credit() {
                                var formatter = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                });
                                var credit_available_value = await ActionsPage.select(BillingCycleLocator.credit_available_value()).innerText
                                var credit_amount = 0
                                for (var i = 0; i < data.data.getAccountMonies.length; i++) {
                                    credit_amount = credit_amount + data.data.getAccountMonies[i].amount
                                }
                                assert(credit_available_value == " " + formatter.format(credit_amount))
                            }
                            assert_credit()
                        });
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