function add_payment_button() {
    return "scorpion-payment-method  scorpion-link"
}

function payment_method_kebabs() {
    return "scorpion-payment-method > ul > li > scorpion-popup-menu > button > scorpion-icon"
}

function update_option() {
    return "scorpion-menu-item:nth-child(1)"
}

function delete_option() {
    return "scorpion-menu-item:nth-child(2)"
}

function confirm_delete(){
    return "scorpion-button:nth-child(1) > button"
}

function payment_nickname() {
    return '[maxlength="40"]'
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

function update_button() {
    return "scorpion-modal-actions > div > scorpion-button.ng-star-inserted > button"
}

module.exports = {
    add_payment_button: add_payment_button,
    payment_method_kebabs: payment_method_kebabs,
    update_option: update_option,
    delete_option: delete_option,
    confirm_delete: confirm_delete,
    payment_nickname: payment_nickname,
    add_credit_card: add_credit_card,
    add_echeck: add_echeck,
    payment_method_item: payment_method_item,
    payment_buttons: payment_buttons,
    scorpion_input: scorpion_input,
    card: card,
    card_expiration: card_expiration,
    card_cvc: card_cvc,
    update_button: update_button
}

