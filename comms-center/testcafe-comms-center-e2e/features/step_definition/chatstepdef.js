// const assert = require('assert');
// const { Given, When, Then } = require('@cucumber/cucumber');
// const chatpage = require('../../pages/ChatPage');
// const { waitForDebugger } = require('inspector');
// const { ChatPage } = require('../../pages/ChatPage');

// const URL = 'https://ui-integration.scorpion.co/chat';

// Given('I open the welcome page', async function () {
//     await testController.navigateTo(URL);
    
//   });

//   When('I enter Email {string}', async function (email) {
//       await testController.typeText(chatpage.ChatPage.Email(), email);
    
//   });

//   When('I enter Password {string}', async function (password) {
//       await testController.typeText(chatpage.ChatPage.Password(), password);
    
//   });

//   Then('I click Sign In button', async function () {
//       await testController.click(chatpage.ChatPage.SignIn());
//       await testController.expect(chatpage.ChatPage.HomePage().exists).ok;
//   });

//   When('I wait for 40 seconds', async function() {
//     await setTimeout(() => { console.log("World!"); }, 20000);
//   });

// //   When('I click on Chat button', async function() {
// //     await testController.click(chatpage.ChatPage.ChatButton());
// //   });

//   When('I wait for the Chat display', async function(){
//       await testController.expect(chatpage.ChatPage.SuccessfulMessage().visible);
//   });

//   When('I click Get Started button', async function (){
//       await testController.click(chatpage.ChatPage.GetStarted());

//   });

//   Then('I land on chat dashboard page', async function(){
//       await testController.expect(chatpage.ChatPage.SubtitleHeader().exists).ok;
//   });