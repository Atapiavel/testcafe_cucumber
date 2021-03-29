const ActionsPage = require('../../pages/actions.pages.js')
const {Given, When, Then} = require('cucumber');
const MainPageLocator = require('../../locators/main.locators.js');
const SettingsPage = require('../../pages/settings.pages.js')
const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

Given('I am in Scorpion {string} page', {timeout: 3 * 5000}, async function (url) {
    await ActionsPage.navigate("https://ui-integration.scorpion.co/" + url)
});

When('I wait for {string} seconds', async function (seconds) {
    await ActionsPage.wait(seconds)
});

// Then('', async function () {
//     const text = await select(MainPageLocator.main_title()).innerText;
//     assert(text == "Your Business Growth")
// });

When('I click on settings button', async function () {
    await ActionsPage.click_element(MainPageLocator.settings_button())
});

Then('I select the {string} option', async function (option) {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), option)
});

When('I sign out Scorpion', async function () {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), "Sign Out")
});

When('I hover on More option', async function () {
    await SettingsPage.hover_more_option()
});