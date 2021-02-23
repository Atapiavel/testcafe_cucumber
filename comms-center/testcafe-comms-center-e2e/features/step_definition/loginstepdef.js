const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const loginpage = require('../../pages/LoginPage');
const { waitForDebugger } = require('inspector');

const URL = 'https://ui-integration.scorpion.co/sign-in';

Given('I open the welcome page', async function () {
    await testController.navigateTo(URL);
    
  });

  When('I enter Email {string}', async function (email) {
      await testController.typeText(loginpage.LoginPage.Email(), email);
    
  });

  When('I enter Password {string}', async function (password) {
      await testController.typeText(loginpage.LoginPage.Password(), password);
    
  });

  Then('I click sign in button', async function () {
      await testController.click(loginpage.LoginPage.SignIn());
    
  });

//   Then('The home page is displayed', async function () {
//       await testController.expect(loginpage.LoginPage.SuccessfulMessage().exists);
    
//   });  