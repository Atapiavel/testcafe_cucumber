const LoginPageLocator = require('../locators/login.locators.js');
const ActionsPage = require("./actions.pages");


async function email_login(email, password) {
    await ActionsPage.type_text(LoginPageLocator.email(), email)
    await ActionsPage.type_text(LoginPageLocator.password(), password)
}

module.exports.email_login = email_login;