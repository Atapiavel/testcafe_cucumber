const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../../pages/actions.pages.js')
const PhonePageLocator = require('../../../locators/comms/phone.locators');
const PhonePage = require('../../../pages/comms/phone.pages');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('I land on Phone page', async function () {
        await testController.expect(PhonePageLocator.exists).ok;
})

When('I click on Search button from phone page', async function () {
        await waitFor(10000)        
        await ActionsPage.click_element(PhonePageLocator.SearchBtn());
});

When('I enter a number in the Search box {string}', async function (phoneSearch) {
        await ActionsPage.type_text(PhonePageLocator.SearchBtn(), phoneSearch);
});

When('I click on Row for the number', async function() {
        await ActionsPage.click_element(PhonePageLocator.RowSearchBtn());
});

When('I click on Arrow Right button', async function() {
        await ActionsPage.click_element(PhonePageLocator.ArrowRightBtn());
});

When('I click on Clear Search button', async function() {
        await ActionsPage.click_element(PhonePageLocator.ClearSearch());
});

When('I click on Filter button', async function() {
        await ActionsPage.click_element(PhonePageLocator.FilterBtn());
})

When('I click on Cancel button', async function() {
        await ActionsPage.click_element(PhonePageLocator.CancelBtn());
})

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

When('I drag the dialpad {string} for x {string} for y', async function(value_1,value_2) {
        await ActionsPage.drag(PhonePageLocator.DragBtn(), value_1,value_2);
})

When('I click on Collapse button', async function() {
        await ActionsPage.click_element(PhonePageLocator.CollapseBtn());
})

When('I click on Minimize button', async function() {
        await waitFor(1000) 
        await ActionsPage.click_element(PhonePageLocator.MiniBtn());
})

When('I click on Maximize button', async function() {
        await waitFor(1000) 
        await ActionsPage.click_element(PhonePageLocator.MaxiBtn());
})

When('I click on Collapse button again', async function() {
        await ActionsPage.click_element(PhonePageLocator.CollapseBtn());
})

When('I click on Sidepanel button', async function() {
        await ActionsPage.click_element(PhonePageLocator.SidePan());
})

When('I click on the Back button', async function() {
        await ActionsPage.click_element(PhonePageLocator.BackToDialPadBtn());
})

When('I click on Minimize button again', async function() {
        await ActionsPage.click_element(PhonePageLocator.MiniBtn());
})

When('I click on End Call button again', async function () {
        await ActionsPage.click_element(PhonePageLocator.EndCallMinBtn());
})

When('I click on Availability button', async function() {
        await ActionsPage.click_element(PhonePageLocator.AvailabilityBtn());
})

When('I click on Availability Toggle button', async function() {
        await ActionsPage.click_element(PhonePageLocator.AvailToggleBtn());
})

When('I click on Availability Toggle button again', async function() {
        await ActionsPage.click_element(PhonePageLocator.AvailToggleBtn());
})

Then('I click on Availability button again', async function() {
        await ActionsPage.click_element(PhonePageLocator.AvailabilityBtn());
})
