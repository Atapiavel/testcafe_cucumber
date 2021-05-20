const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../../pages/actions.pages.js')
const MessengerPageLocator = require('../../../locators/comms/messenger.locators.js');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('I land on Messenger page', async function () {
      await testController.expect(MessengerPageLocator.exists).ok;
});

When('I click on Search button from messenger page', async function () {     
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

When('I click on Messages button', async function () {
      await waitFor(1000);
      await ActionsPage.click_element(MessengerPageLocator.MessagesBtn());
});

When('I click on Aaron McFly button', async function() {
      await waitFor(1000);
      await ActionsPage.click_element(MessengerPageLocator.AaronBtn());
});

When('I enter a {string} into the message field', async function(message) {
      await ActionsPage.type_text(MessengerPageLocator.MessageAaron(), message)
});

Then('I click on Send Message button', async function () {
      await ActionsPage.click_element(MessengerPageLocator.SendMessageBtn());
});