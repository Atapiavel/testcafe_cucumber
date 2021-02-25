const LoginPage = require('../../pages/login.pages.js');
const ActionsPage = require('../../pages/actions.pages.js')
const LoginPageLocator = require('../../locators/login.locators.js');
const {Given, When, Then} = require('cucumber');

Given('we are in Scorpion login page', {timeout: 2 * 5000}, async function () {
    await ActionsPage.navigate("https://ui-integration.scorpion.co/sign-in")
});

When('we enter {string} and {string}', async function (email, password) {
    await LoginPage.email_login(email, password)
});

When('we click on sign in button', async function () {
    await ActionsPage.click_element(LoginPageLocator.sign_in_button())
});

