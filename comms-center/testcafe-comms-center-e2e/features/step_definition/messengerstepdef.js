const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const messengerpage = require('../../pages/MessengerPage');
const { waitForDebugger } = require('inspector');
const { MessengerPage } = require('../../pages/MessengerPage');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

const URL = 'https://ui-integration.scorpion.co/messenger';

Given('I open the welcome page', async function () {
        await testController.navigateTo(URL);
    
  });

When('I enter Email {string}', async function (email) {
        await testController.typeText(messengerpage.MessengerPage.Email(), email);
    
  });

When('I enter Password {string}', async function (password) {
        await testController.typeText(messengerpage.MessengerPage.Password(), password);
    
  });

Then('I click Sign In button', async function () {
        await testController.click(messengerpage.MessengerPage.SignIn());

  });

When('I wait for 40 seconds', async function() {
        // await testController.setTimeout(() => { console.log("World!"); }, 40000);
        await waitFor(10000);
  });

When('I land on Messenger page', async function () {
        await testController.expect(messengerpage.MessengerPage.exists).ok;
  })

When('I click on Search button', async function() {
        // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;        
        await testController.click(messengerpage.MessengerPage.SearchBtn());
  });

When('I click on Groups button', async function() {
        await waitFor(1000);
        await testController.click(messengerpage.MessengerPage.GroupsBtn());
  });

When('I click on People button', async function(){
        await waitFor(1000);
        await testController.click(messengerpage.MessengerPage.PeopleBtn());
  });

Then('I click on Messages button', async function (){
        await waitFor(1000);
        await testController.click(messengerpage.MessengerPage.MessagesBtn());

  });