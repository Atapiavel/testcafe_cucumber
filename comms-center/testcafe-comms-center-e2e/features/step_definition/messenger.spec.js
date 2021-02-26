const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../pages/actions.pages.js')
const MessengerPageLocator = require('../../locators/messenger.locators');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('we click on Messenger button', async function () {
      await ActionsPage.click_element(MessengerPageLocator.MessengerBtn())
});

When('I land on Messenger page', async function () {
      await testController.expect(MessengerPageLocator.exists).ok;
});

When('I click on Search button from messenger page', async function () {
      // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;        
      await ActionsPage.click_element(MessengerPageLocator.SearchBtn());
});

When('I click on Groups button', async function () {
      await waitFor(1000);
      await ActionsPage.click_element(MessengerPageLocator.GroupsBtn());
});

When('I click on People button', async function () {
      await waitFor(1000);
      await ActionsPage.click_element(MessengerPageLocator.PeopleBtn());
});

Then('I click on Messages button', async function () {
      await waitFor(1000);
      await ActionsPage.click_element(MessengerPageLocator.MessagesBtn());

});