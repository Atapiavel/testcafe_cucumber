const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const ContactPage = require('../../../pages/billing/contact.pages.js');
const ContactPageLocator = require('../../../locators/billing/contact.locators.js');
const contactPages = require('../../../pages/billing/contact.pages.js');


Then('I assert contact module is visible', async function () {
    await ActionsPage.hover_element(ContactPageLocator.add_billing_contact())
    const element = ActionsPage.select(ContactPageLocator.add_billing_contact());
    await testController.expect(element.exists).ok();
})

When('I click on add billing contact', async function () {
    await ActionsPage.hover_element(ContactPageLocator.add_billing_contact())
    await ActionsPage.click_element(ContactPageLocator.add_billing_contact())
})

When('I click on create a new billing contact', async function () {
    await ActionsPage.click_element(ContactPageLocator.create_contact())
})

When('I fill billing contact info with', async function (datatable) {
    await ContactPage.fill_contact_info(datatable)
})

Then('I click on add button', async function () {
    await ActionsPage.click_element(ContactPageLocator.add())
})

Then('I click on update button', async function () {
    await ActionsPage.click_element(ContactPageLocator.update())
})

Then('I assert that contact is shown with', async function (datatable) {
    await ContactPage.verify_contact(datatable)
})

Then('I assert {string} option is visible for contact {string}', async function (option, contact_name) {
    await ContactPage.verify_kebab_from_contact(option, contact_name)
})


When('I click {string} option for contact {string}', async function (option, contact_name) {
    await ContactPage.click_kebab_option(option, contact_name)
})

Then('I assert {string} as primary contact', async function (contact_name) {
    await ContactPage.assert_primary_contact(contact_name)
})