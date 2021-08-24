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

function kebab_options() {
    return "#billing-subscription-column-menu-"
}

function payment_methods() {
    return "scorpion-select-item > span > button"
}

function edit_options() {
    return "#billing-subscription-menu-option-edit-"
}

function open_dropdown() {
    return "[data-cy=select-input]"
}

function autopay_switch() {
    return "#billing-subscription-modal-update-toggle-autopay"
}

function save_subscription() {
    return "#billing-subscription-modal-button-edit"
}

module.exports = {
    contract_names: contract_names,
    valid_until: valid_until,
    assigned_payments: assigned_payments,
    autopay: autopay,
    kebab_options: kebab_options,
    payment_methods: payment_methods,
    edit_options: edit_options,
    open_dropdown: open_dropdown,
    autopay_switch: autopay_switch,
    save_subscription: save_subscription
}
