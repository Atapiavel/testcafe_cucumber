const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const messengerpage = require('../../pages/MessengerPage');
const { waitForDebugger } = require('inspector');
const { MessengerPage } = require('../../pages/MessengerPage');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('we click on Messenger button', async function () {

});

When('I land on Messenger page', async function () {
      await testController.expect(messengerpage.MessengerPage.exists).ok;
});

When('I click on Search button from messenger page', async function () {
      // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;        
      await testController.click(messengerpage.MessengerPage.SearchBtn());
});

When('I click on Groups button', async function () {
      await waitFor(1000);
      await testController.click(messengerpage.MessengerPage.GroupsBtn());
});

When('I click on People button', async function () {
      await waitFor(1000);
      await testController.click(messengerpage.MessengerPage.PeopleBtn());
});

Then('I click on Messages button', async function () {
      await waitFor(1000);
      await testController.click(messengerpage.MessengerPage.MessagesBtn());

});