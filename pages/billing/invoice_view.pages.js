const InvoiceViewLocator = require('../../locators/billing/invoice_view.locators');
const ActionsPage = require("../actions.pages")
const assert = require('assert');
const { Selector } = require('testcafe');

async function see_invoice_details(invoice) {
    if (invoice == "first") {
        var headers = await ActionsPage.bearer()
        var invoice_list = await ActionsPage.get_invoice_list(headers, 1)
        await ActionsPage.logoff(headers)
        await ActionsPage.click_element_from_list(InvoiceViewLocator.invoice_numbers(), invoice_list.data.getInvoiceList.items[0].invoiceNumber)
    }
    else {
        await ActionsPage.click_element_from_list(InvoiceViewLocator.invoice_numbers(), value)
    }
    //API Data
    var headers = await ActionsPage.bearer()
    var invoice_data = await ActionsPage.get_invoice(headers, invoice_list.data.getInvoiceList.items[0].invoiceId)
    await ActionsPage.logoff(headers)
    var api_amount_due = await ActionsPage.format_currency(invoice_data.data.getInvoice.amountDue)
    var api_invoice_number = invoice_data.data.getInvoice.invoiceNumber
    var api_amount_paid = await ActionsPage.format_currency(invoice_data.data.getInvoice.amountPaid)
    var api_due_date = await ActionsPage.format_date(invoice_data.data.getInvoice.dueDate)
    var api_start_date = await ActionsPage.format_date(invoice_data.data.getInvoice.startDate)
    var due_api_month = api_due_date.getMonth()
    var due_api_day = api_due_date.getDate()
    var due_api_year = api_due_date.getFullYear()
    if (due_api_month.toString().length < 2) {
        due_api_month = "0" + (due_api_month + 1)
    }
    if (due_api_day.toString().length < 2) {
        due_api_day = "0" + due_api_day
    }
    var start_api_month = api_start_date.getMonth()
    var start_api_day = api_start_date.getDate()
    var start_api_year = api_start_date.getFullYear()
    if (start_api_month.toString().length < 2) {
        start_api_month = "0" + (start_api_month + 1)
    }
    if (start_api_day.toString().length < 2) {
        start_api_day = "0" + start_api_day
    }
    //FE Data
    var fe_amount_due = await ActionsPage.get_text(InvoiceViewLocator.balance_due())
    var fe_invoice_number = await ActionsPage.get_text(InvoiceViewLocator.invoice_number())
    var fe_due_date = await ActionsPage.get_text(InvoiceViewLocator.due_date())
    var fe_billing_period = await ActionsPage.get_text(InvoiceViewLocator.billing_period())
    var fe_amount_paid = await ActionsPage.get_text(InvoiceViewLocator.payments())
    var fe_item_name = Selector(InvoiceViewLocator.items())
    var fe_unit_price = Selector(InvoiceViewLocator.unit_prices())
    var fe_quantity = Selector(InvoiceViewLocator.quantities())
    var fe_item_amount = Selector(InvoiceViewLocator.items_amounts())
    // Assertions
    console.log("API Value" + api_amount_due + " - Front End Value" + fe_amount_due)
    console.log("API Value" + " " + api_invoice_number + " - Front End Value" + fe_invoice_number)
    console.log("API Value" + api_amount_paid + " - Front End Value" + fe_amount_paid)
    console.log("API Value" + due_api_month + "/" + due_api_day + "/" + due_api_year + " - Front End Value" + fe_due_date)
    console.log("API Value" + start_api_month + "/" + start_api_day + "/" + start_api_year + " - " +
        due_api_month + "/" + due_api_day + "/" + due_api_year + " - Front End Value" + fe_billing_period)

    assert(api_amount_due == fe_amount_due)
    assert(" " + api_invoice_number == fe_invoice_number)
    assert(api_amount_paid == fe_amount_paid)
    assert(due_api_month + "/" + due_api_day + "/" + due_api_year == fe_due_date)
    assert(start_api_month + "/" + start_api_day + "/" + start_api_year + " - " +
        due_api_month + "/" + due_api_day + "/" + due_api_year == fe_billing_period)
    // Initial variables
    var platform_array = []
    var advertising_array = []
    var setup_array = []
    var platform_z = 0
    var advertising_z = 0
    var setup_z = 0
    var z = 0
    for (var i = 0; i < invoice_data.data.getInvoice.billingLineItems.length; i++) {
        if (invoice_data.data.getInvoice.billingLineItems[i].serviceLineName == "Platform") {
            platform_array[platform_z] = {
                billingLineItemName: invoice_data.data.getInvoice.billingLineItems[i].billingLineItemName,
                unitPrice: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].unitPrice),
                quantity: invoice_data.data.getInvoice.billingLineItems[i].quantity,
                amount: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].amount),
            }
            platform_z = platform_z + 1
        }
        if (invoice_data.data.getInvoice.billingLineItems[i].serviceLineName == "Advertising") {
            advertising_array[advertising_z] = {
                billingLineItemName: invoice_data.data.getInvoice.billingLineItems[i].billingLineItemName,
                unitPrice: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].unitPrice),
                quantity: invoice_data.data.getInvoice.billingLineItems[i].quantity,
                amount: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].amount),
            }
            advertising_z = advertising_z + 1
        }
        if (invoice_data.data.getInvoice.billingLineItems[i].serviceLineName == "Setup") {
            setup_array[setup_z] = {
                billingLineItemName: invoice_data.data.getInvoice.billingLineItems[i].billingLineItemName,
                unitPrice: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].unitPrice),
                quantity: invoice_data.data.getInvoice.billingLineItems[i].quantity,
                amount: await ActionsPage.format_currency(invoice_data.data.getInvoice.billingLineItems[i].amount),
            }
            setup_z = setup_z + 1
        }
    }
    if (platform_z > 0) {
        for (i = 0; i < platform_z; i++) {
            console.log(platform_array[i].billingLineItemName + " - "+ await ActionsPage.get_text(fe_item_name.nth(z)))
            console.log(platform_array[i].unitPrice + " - "+ await ActionsPage.get_text(fe_unit_price.nth(z)))
            console.log(platform_array[i].quantity + " - "+ await ActionsPage.get_text(fe_quantity.nth(z)))
            console.log(platform_array[i].amount + " - "+ await ActionsPage.get_text(fe_item_amount.nth(z)))
            assert(platform_array[i].billingLineItemName == await ActionsPage.get_text(fe_item_name.nth(z)))
            assert(platform_array[i].unitPrice == await ActionsPage.get_text(fe_unit_price.nth(z)))
            assert(platform_array[i].quantity == await ActionsPage.get_text(fe_quantity.nth(z)))
            assert(platform_array[i].amount == await ActionsPage.get_text(fe_item_amount.nth(z)))
            z = z + 1
        }
    }
    if (advertising_z > 0) {
        for (i = 0; i < advertising_z; i++) {
            assert(advertising_array[i].billingLineItemName == await ActionsPage.get_text(fe_item_name.nth(z)))
            assert(advertising_array[i].unitPrice == await ActionsPage.get_text(fe_unit_price.nth(z)))
            assert(advertising_array[i].quantity == await ActionsPage.get_text(fe_quantity.nth(z)))
            assert(advertising_array[i].amount == await ActionsPage.get_text(fe_item_amount.nth(z)))
            z = z + 1
        }
    }
    if (setup_z > 0) {
        for (i = 0; i < setup_z; i++) {
            assert(setup_array[i].billingLineItemName == await ActionsPage.get_text(fe_item_name.nth(z)))
            assert(setup_array[i].unitPrice == await ActionsPage.get_text(fe_unit_price.nth(z)))
            assert(setup_array[i].quantity == await ActionsPage.get_text(fe_quantity.nth(z)))
            assert(setup_array[i].amount == await ActionsPage.get_text(fe_item_amount.nth(z)))
            z = z + 1
        }
    }
    // console.log(invoice_data.data.getInvoice.payments[i])
    // console.log(invoice_data.data.getInvoice.subscription[i])
}

module.exports = {
    see_invoice_details: see_invoice_details
}