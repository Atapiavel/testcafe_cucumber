const LoginPage = require('../../pages/login.pages.js');
const ActionsPage = require('../../pages/actions.pages.js')
const LoginPageLocator = require('../../locators/login.locators.js');
const { When } = require('cucumber');

When('I enter {string} and {string}', { timeout: 6 * 5000 }, async function (email, password) {
    await LoginPage.email_login(email, password)
});

When('I click on sign in button', async function () {
    await ActionsPage.click_element(LoginPageLocator.sign_in_button())
});

When('I select the account to use with {string}', async function (account) {
    await ActionsPage.type_text(LoginPageLocator.search_account(), account)
    await ActionsPage.wait(2)
    await ActionsPage.click_element(LoginPageLocator.radio_circle())
    await ActionsPage.click_element(LoginPageLocator.sign_in_button_modal())
});

