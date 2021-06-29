const ActionsPage = require("../actions.pages")
const ContactPageLocator = require('../../locators/billing/contact.locators.js');
const { Selector } = require('testcafe');
const assert = require("assert");

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
    const records = ActionsPage.select('[id^=billing-contact-list-name-]');
    const records_count = await records.count
    var n = 0;
    for (var i = 0; i < records_count; i++) {
        const name = '[id=billing-contact-list-name-' + (i) + ']'
        const mail = '[id=billing-contact-list-email-' + (i) + ']'
        const phone = '[id=billing-contact-list-phone-' + (i) + ']'
        const text_name = await ActionsPage.select(name).innerText
        const text_mail = await ActionsPage.select(mail).innerText
        const text_phone = await ActionsPage.select(phone).innerText
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

async function assert_kebab_text(option_text, option) {
    menu_option = "#billing-contact-list-menu-option-" + option
    await ActionsPage.hover_element(menu_option)
    const text = await ActionsPage.select(menu_option).innerText
    assert(text == option_text)
}

async function verify_kebab_from_contact(option, contact_name) {
    const records = ActionsPage.select('[id^=billing-contact-list-name-]');
    const records_count = await records.count
    var n = 0;
    for (var i = 0; i < records_count; i++) {
        const name = '[id=billing-contact-list-name-' + (i) + ']'
        const text_name = await ActionsPage.select(name).innerText
        if (text_name == contact_name) {
            const kebab = ActionsPage.select('#billing-contact-list-menu-button-' + i)
            ActionsPage.hover_element(kebab)
            ActionsPage.click_element(kebab)
            if (option == "setAsPrimary") {
                await assert_kebab_text("Set as primary", option)
                n = 1
            }
            if (option == "update") {
                await assert_kebab_text("Update", option)
                n = 1
            }
            if (option == "delete") {
                await assert_kebab_text("Delete", option)
                n = 1
            }
            ActionsPage.click_element(kebab)
            break;
        }
    }
}


async function click_kebab_option(option, contact_name){
    const records = ActionsPage.select('[id^=billing-contact-list-name-]');
    const records_count = await records.count
    for (var i = 0; i < records_count; i++) {
        const name = '[id=billing-contact-list-name-' + (i) + ']'
        const text_name = await ActionsPage.select(name).innerText
        if (text_name == contact_name) {
            const kebab = ActionsPage.select('#billing-contact-list-menu-button-' + i)
            ActionsPage.hover_element(kebab)
            ActionsPage.click_element(kebab)
            menu_option = "#billing-contact-list-menu-option-" + option
            await ActionsPage.hover_element(menu_option)
            await ActionsPage.click_element(menu_option)
        }
    }
}

async function assert_primary_contact(contact_name){
    const records = ActionsPage.select('[id^=billing-contact-list-name-]');
    const records_count = await records.count
    for (var i = 0; i < records_count; i++) {
        const name = '[id=billing-contact-list-name-' + (i) + ']'
        const text_name = await ActionsPage.select(name).innerText
        if (text_name.includes(contact_name)) {
            console.log(text_name)
            console.log(contact_name)
            assert(text_name == contact_name + ' (Primary)')
        }
    }
}

module.exports = {
    fill_contact_info: fill_contact_info,
    verify_contact: verify_contact,
    verify_kebab_from_contact: verify_kebab_from_contact,
    click_kebab_option: click_kebab_option,
    assert_primary_contact: assert_primary_contact
};
