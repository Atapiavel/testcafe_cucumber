const ActionsPage = require('../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const ChatPageLocator = require('../../locators/chat.locators');
const Asserts = require('../support/asserts.js');

  When('I wait for the Chat display', async function(){
      await Asserts.assert_exists(ChatPageLocator.ChatTitle());
  });

  When('I click Get Started button', async function (){
      await ActionsPage.click_element(ChatPageLocator.GetStarted());
  });

  Then('I land on chat dashboard page', async function(){
      await Asserts.assert_exists(ChatPageLocator.ChatDashboardTtitle());
  });