const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const ContactPage = require('../../../pages/billing/contact.pages.js');
const ContactPageLocator = require('../../../locators/billing/contact.locators.js');


//  Then('I assert contact module is visible', async function () {
//      await 
//  })

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