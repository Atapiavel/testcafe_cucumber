const BillingCycleLocator = require('../../locators/billing/billing_cycle.locators');
const ActionsPage = require("../actions.pages")
const assert = require('assert');
const sourceFile = require('../../features/support/hooks');

// VARIABLES
var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var start_of_month = new Date(year, month, 1, 0, 0, 0, 0)
var end_of_month = new Date(year, month + 1, 0, 18, 59, 59);
var current_unpaid_amount = 0
var amount_due = 0
var past_amount_due = 0
var amount_paid = 0
var current_amount = 0
var credit_amount = 0



async function see_graph_details() {
    sourceFile.billing_overview_data.then(async function (val) {
        var i = val[1].data.getInvoiceList.totalCount
        for (var n = 0; n < i; n++) {
            var amount = val[1].data.getInvoiceList.items[n].amountDue
            var amount_paid_aux = val[1].data.getInvoiceList.items[n].amountPaid
            var due_date = new Date(val[1].data.getInvoiceList.items[n].dueDate)
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
        var date_range = await ActionsPage.get_text(BillingCycleLocator.date_range())
        var estimate_value = await ActionsPage.get_text(BillingCycleLocator.estimate_value())
        var estimate_text = await ActionsPage.get_text(BillingCycleLocator.estimate_text())
        var total_balance_due_value = await ActionsPage.get_text(BillingCycleLocator.total_balance_due_value())
        ActionsPage.wait(1)
        if (estimate_value == formatter.format(current_amount)) {
            assert.ok(true)
        }
        else {
            console.log(estimate_value + " - " + formatter.format(current_amount))
            assert.ok(false)
        }
        if (total_balance_due_value == formatter.format(amount_due)) {
            assert.ok(true)
        }
        else {
            console.log(total_balance_due_value + " - " + formatter.format(amount_due))
            assert.ok(false)
        }
        if (actual_range == date_range) {
            assert.ok(true)
        }
        else {
            console.log(actual_range + " - " + date_range)
            assert.ok(false)
        }
        if (estimate_text == "ESTIMATE") {
            assert.ok(true)
        }
        else {
            console.log(estimate_text + " - " + "ESTIMATE")
            assert.ok(false)
        }
        var credit_available_value = await ActionsPage.get_text(BillingCycleLocator.credit_available_value())
        for (var i = 0; i < val[2].data.getAccountMonies.length; i++) {
            credit_amount = credit_amount + val[2].data.getAccountMonies[i].amount
        }
        if (credit_available_value == " " + formatter.format(credit_amount)) {
            assert.ok(true)
        }
        else {
            console.log(credit_available_value + "-" + " " + formatter.format(credit_amount))
            assert.ok(false)
        }
    })
}

module.exports = {
    see_graph_details: see_graph_details,
}