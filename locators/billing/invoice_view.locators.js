function invoice_number() {
    return "#billing-invoice-view-header-invoiceNumber"
}

function scorpion_address_location_type() {
    return "#billing-invoice-view-header-scorpionAddress-locationType"
}

function scorpion_address_1() {
    return "#billing-invoice-view-header-scorpionAddress-address1"
}

function scorpion_address_2() {
    return "#billing-invoice-view-header-scorpionAddress-address2"
}

function scorpion_address_city() {
    return "#billing-invoice-view-header-scorpionAddress-cityStateZip"
}

function client_address_location_type() {
    return "#billing-invoice-view-header-clientAddress-clientName"
}

function client_address_1() {
    return "#billing-invoice-view-header-clientAddress-address1"
}

function client_address_2() {
    return "#billing-invoice-view-header-clientAddress-address2"
}

function client_address_city() {
    return "#billing-invoice-view-header-clientAddress-cityStateZip"
}

function due_date(){
    return "#billing-invoice-view-header-dueDate"
}

function billing_period(){
    return "#billing-invoice-view-header-billingPeriod"
}

function subscription(){
    return "#billing-invoice-view-header-friendlyName"
}

function autopay(){
    return "#billing-invoice-view-header-autopayEnabled"
}

function balance_due(){
    return "#billing-invoice-view-totaling-balanceDue"
}

function payments(){
    return "#billing-invoice-view-totaling-payments"
}

function subtotal(){
    return "#billing-invoice-view-totaling-subtotal"
}

function invoice_numbers(){
    return "tr > td:nth-of-type(2)"
}

function items(){
    return "#billing-invoice-view-subitem-item"
}

function unit_prices(){
    return "#billing-invoice-view-subitem-unitPrice"
}

function quantities(){
    return "#billing-invoice-view-subitem-quantity"
}

function items_amounts(){
    return "#billing-invoice-view-subitem-amount"
}


module.exports = {
invoice_number: invoice_number,
scorpion_address_location_type: scorpion_address_location_type,
scorpion_address_1: scorpion_address_1,
scorpion_address_2: scorpion_address_2,
scorpion_address_city: scorpion_address_city,
client_address_location_type: client_address_location_type,
client_address_1: client_address_1,
client_address_2: client_address_2,
client_address_city: client_address_city,
due_date: due_date,
billing_period: billing_period,
subscription: subscription,
autopay: autopay,
balance_due: balance_due,
payments: payments,
subtotal: subtotal,
invoice_numbers: invoice_numbers,
items: items,
unit_prices: unit_prices,
quantities: quantities,
items_amounts: items_amounts
}