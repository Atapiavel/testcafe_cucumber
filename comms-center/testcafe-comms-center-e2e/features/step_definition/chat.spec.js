const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const chatpage = require('../../pages/ChatPage');
const { waitForDebugger } = require('inspector');
const { ChatPage } = require('../../pages/ChatPage');

const URL = 'https://ui-integration.scorpion.co/chat';

  When('I click on Chat button', async function() {
    await testController.click(chatpage.ChatPage.ChatButton());
  });

  When('I wait for the Chat display', async function(){
      await testController.expect(chatpage.ChatPage.ChatTitle().visible).ok();
  });

  When('I click Get Started button', async function (){
      await testController.click(chatpage.ChatPage.GetStarted());

  });

  Then('I land on chat dashboard page', async function(){
      await testController.expect(chatpage.ChatPage.ChatDashboardTtitle().exists).ok;
  });