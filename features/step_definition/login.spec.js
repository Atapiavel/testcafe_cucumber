const LoginPage = require('../../pages/login.pages.js');
const ActionsPage = require('../../pages/actions.pages.js')
const LoginPageLocator = require('../../locators/login.locators.js');
const { When } = require('cucumber');

When('I enter {string} and {string}', async function (email, password) {
    await LoginPage.email_login(email, password)
});

When('I click on sign in button', async function () {
    await ActionsPage.click_element(LoginPageLocator.sign_in_button())
});
