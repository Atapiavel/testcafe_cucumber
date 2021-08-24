function add_payment_button() {
    return "scorpion-payment-method  scorpion-link"
}

function select_payment_method() {
    return "[data-cy=select-input]"
}

function payment_method_item() {
    return "scorpion-select-item > span > button"
}

function payment_buttons() {
    return "scorpion-modal scorpion-button"
}

function name() {
    return "scorpion-input"
}

function card() {
    return ".stripe-field"
}

module.exports = {
    add_payment_button: add_payment_button,
    select_payment_method: select_payment_method,
    payment_method_item: payment_method_item,
    payment_buttons: payment_buttons,
    name: name,
    card: card
}

