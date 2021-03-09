const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../pages/actions.pages.js')
const PhonePageLocator = require('../../locators/phone.locators');
const PhonePage = require('../../pages/phone.pages');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('I land on Phone page', async function () {
        await testController.expect(PhonePageLocator.exists).ok;
})

When('I click on Search button from phone page', async function () {
        // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;
        await waitFor(10000)        
        await ActionsPage.click_element(PhonePageLocator.SearchBtn());
});

When('I click on Make a Call button', async function () {
        await ActionsPage.click_element(PhonePageLocator.MakeCallBtn());
});

When('I enter numbers in Phone Number entry {string}', async function (phoneNr) {
        await ActionsPage.type_text(PhonePageLocator.PhoneNrEntry(), phoneNr);
});

When('I click on Call button', async function () {
        await ActionsPage.click_element(PhonePageLocator.CallBtn());
});

Then('I click on End Call button', async function () {
        await ActionsPage.click_element(PhonePageLocator.EndCallBtn());
});

When('I click on Make a Call button again', async function () {
        await ActionsPage.click_element(PhonePageLocator.MakeCallBtn());
});

When('I make a call to the number {string}', async function (number) {
        await PhonePage.dial_number(number);
})

When('I click on Call button again', async function () {
        await ActionsPage.click_element(PhonePageLocator.CallBtn());
});

Then('I click on End Call button again', async function () {
        await ActionsPage.click_element(PhonePageLocator.EndCallBtn());
});
