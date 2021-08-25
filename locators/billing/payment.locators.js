function add_payment_button() {
    return "scorpion-payment-method  scorpion-link"
}

function add_credit_card() {
    return "scorpion-radio-button:nth-of-type(1)  scorpion-radio-circle  .radio-outer-circle"
}

function add_echeck() {
    return "scorpion-radio-button:nth-of-type(2)  scorpion-radio-circle  .radio-outer-circle"
}

function payment_method_item() {
    return "scorpion-select-item > span > button"
}

function payment_buttons() {
    return "scorpion-modal scorpion-button"
}

function scorpion_input() {
    return "scorpion-input"
}

function card() {
    return "#stripeForm-card-number"
}

function card_expiration() {
    return "#stripeForm-card-expiry"
}

function card_cvc() {
    return "#stripeForm-card-cvc"
}

function card_cvc() {
    return "#stripeForm-card-cvc"
}

module.exports = {
    add_payment_button: add_payment_button,
    add_credit_card: add_credit_card,
    add_echeck: add_echeck,
    payment_method_item: payment_method_item,
    payment_buttons: payment_buttons,
    scorpion_input: scorpion_input,
    card: card,
    card_expiration: card_expiration,
    card_cvc: card_cvc
}

