const ActionsPage = require("../actions.pages")
const ContactPageLocator = require('../../locators/billing/contact.locators.js');
const { Selector } = require('testcafe');
const assert = require("assert");

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

async function fill_contact_info(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    await ActionsPage.type_text(ContactPageLocator.name(), data_flat[0])
    await ActionsPage.type_text(ContactPageLocator.email(), data_flat[1])
    await ActionsPage.type_text(ContactPageLocator.phone(), data_flat[2])
    if (data_flat[3] == 'Y') {
        await ActionsPage.click_element(ContactPageLocator.notification())
    }
}

async function verify_contact(datatable) {
    data = datatable.raw()
    data_flat = data.flat()
    const records = select('[id^=billing-contact-list-name-]');
    const records_count = await records.count
    var n = 0;
    for (var i = 0; i < records_count; i++) {
        const name = '[id=billing-contact-list-name-' + (i) + ']'
        const mail = '[id=billing-contact-list-email-' + (i) + ']'
        const phone = '[id=billing-contact-list-phone-' + (i) + ']'
        const text_name = await select(name).innerText
        const text_mail = await select(mail).innerText
        const text_phone = await select(phone).innerText
        if (text_name == data_flat[0]) {
            if (text_mail == data_flat[1]) {
                if (text_phone == data_flat[2]) {
                    assert.ok(true)
                    var n = 1;
                    break;
                }
            }
        }
    }
    if (n != 1) {
        assert.ok(false)
    }
}

module.exports = {
    fill_contact_info: fill_contact_info,
    verify_contact: verify_contact
};
