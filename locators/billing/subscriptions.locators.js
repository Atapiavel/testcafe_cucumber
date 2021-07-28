function contract_names() {
    return "#billing-subscription-column-contractName-"
}

function valid_until() {
    return "#billing-subscription-column-validUntil-"
}

function assigned_payments() {
    return "#billing-subscription-column-assignedPayment-"
}

function autopay() {
    return "#billing-subscription-column-autopay-"
}

module.exports = {
    contract_names: contract_names,
    valid_until: valid_until,
    assigned_payments: assigned_payments,
    autopay: autopay
}
