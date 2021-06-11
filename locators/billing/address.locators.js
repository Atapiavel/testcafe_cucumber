function address_main_title() {
    return 'scorpion-billing-address'
}

function billing_address() {
    return '#billing-address-full-address'
}

function address_kebab_menu() {
    return '#billing-address-menu-button scorpion-icon'
}

function update_address() {
    return '.menu-item-label'
}

function update_address_title() {
    return 'scorpion-modal-title'
}

function update_address_subheader() {
    return 'scorpion-modal-subheader'
}

function address_1() {
    return '#billing-address-form-input-address1'
}

function address_2() {
    return '#billing-address-form-input-address2'
}

function city() {
    return '#billing-address-form-input-city'
}

function state() {
    return '#billing-address-form-select-state'
}

function zipcode() {
    return '#billing-address-form-input-zip'
}

function select_address() {
    return '#billing-address-modal-update-select-platformUsers'
}

function create_new_address() {
    return '[data-cy="link"]'
}

function back_button() {
    return '#billing-address-modal-update-button-back'
}

module.exports = {
    address_main_title: address_main_title,
    billing_address: billing_address,
    address_kebab_menu: address_kebab_menu,
    update_address: update_address,
    update_address_title: update_address_title,
    update_address_subheader: update_address_subheader,
    address_1: address_1,
    address_2: address_2,
    city: city,
    state: state,
    zipcode: zipcode,
    select_address: select_address,
    create_new_address: create_new_address,
    back_button: back_button
};