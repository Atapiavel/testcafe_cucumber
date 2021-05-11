function add_billing_contact() {
    return '#billing\.contact\.list\.link\.add'
}

function contact_select() {
    return '[data-cy="select-input"]'
}

function create_contact() {
    return '#billing\.modal\.add\.link\.create'
}

function name() {
    return '#billing\.modal\.form\.input\.name'
}

function email() {
    return '#billing\.modal\.form\.input\.email'
}

function phone() {
    return '#billing\.modal\.form\.input\.phone'
}

function notification() {
    return '#billing\.modal\.form\.checkbox\.monthlyNotification'
}

function add() {
    return '#billing\.modal\.add\.button\.add'
}

function cancel() {
    return '#billing\.modal\.add\.button\.cancel'
}

module.exports = {
    add_billing_contact: add_billing_contact,
    contact_select: contact_select,
    create_contact: create_contact,
    name: name,
    email: email,
    phone: phone,
    notification: notification,
    add: add,
    cancel: cancel
};