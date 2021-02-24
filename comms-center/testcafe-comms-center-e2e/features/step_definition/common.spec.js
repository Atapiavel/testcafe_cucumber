const ActionsPage = require('../../pages/actions.pages.js')
const {Given, When, Then} = require('cucumber');
const MainPage = require('../../pages/main.pages.js');
const MainPageLocator = require('../../locators/main.locators.js');

When('we wait for {string} seconds', async function (seconds) {
    await ActionsPage.wait(seconds)
});

Then('we assert the Scorpion main page', async function () {
    await MainPage.assert_main_modules()
});

When('we click on settings button', async function () {
    await ActionsPage.click_element(MainPageLocator.settings_button())
});

Then('we select the {string} option', async function (option) {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), option)
});

When('we sign out Scorpion', async function () {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), "Sign Out")
});