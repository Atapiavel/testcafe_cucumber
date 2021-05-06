const ActionsPage = require('../../../pages/actions.pages.js')
const { When, Then } = require('@cucumber/cucumber');
const ChatPageLocator = require('../../../locators/comms/chat.locators.js');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

When('I wait for the Chat display', async function () {
  await testController.expect(ChatPageLocator.exists).ok;
});

When('I land on chat dashboard page', async function () {
  await testController.expect(ChatPageLocator.exists).ok;
});

When('I click on the Agent Availability button', async function() {
  await ActionsPage.click_element(ChatPageLocator.AgentAvailBtn());
});

Then('The Set Your Availability displays', async function() {
  await testController.expect(ChatPageLocator.exists).ok;
});

When('I click on toggle for Availability', async function() {
  await ActionsPage.click_element(ChatPageLocator.AvailToggleBtn());
});

When('I click on toggle for Availability again', async function() {
  await ActionsPage.click_element(ChatPageLocator.AvailToggleBtn());
});

When('I click on the Agent Availability button again', async function() {
  await ActionsPage.click_element(ChatPageLocator.AgentAvailBtn());
});

When('I click on Mine button', async function() {
  await ActionsPage.click_element(ChatPageLocator.MineBtn());
});

Then('I click on All button', async function() {
  await ActionsPage.click_element(ChatPageLocator.AllBtn());
});