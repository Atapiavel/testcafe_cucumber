const ActionsPage = require('../../pages/actions.pages.js')
const { Given, When, Then } = require('cucumber');
const MainPageLocator = require('../../locators/main.locators.js');
const SettingsPage = require('../../pages/settings.pages.js')
const sql = require('mssql')
// const config = require('../../db_config');
const fs = require('fs')

Given('I am in Scorpion login page', { timeout: 30000 }, async function () {
    await ActionsPage.navigate("https://login-integration.scorpion.co/")
});

Given('I am in Scorpion {string} page', { timeout: 30000 }, async function (url) {
    await ActionsPage.navigate("https://ui-integration.scorpion.co/" + url)
});

When('I wait for {string} seconds', { timeout: 30000 }, async function (seconds) {
    await ActionsPage.wait(seconds)
});

When('I click on settings button', { timeout: 30000 }, async function () {
    await ActionsPage.click_element(MainPageLocator.settings_button())
});

Then('I select the {string} option', { timeout: 30000 }, async function (option) {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), option)
});

When('I sign out Scorpion', { timeout: 30000 }, async function () {
    await ActionsPage.click_element_from_list(MainPageLocator.settings_options(), "Sign Out")
});

When('I hover on More option', { timeout: 30000 }, async function () {
    await SettingsPage.hover_more_option()
});

// DB Code - VPN DEPENDENCY - DEPRECATED
// When('I execute the next query {string}', { timeout: 30000 }, async function (file) {
//     await sql.connect(config)
//     var query_file = fs.readFileSync('./sql/' + file + '.sql', 'utf8');
//     await sql.query([query_file])
// })

When('I maximize the window', { timeout: 30000 }, async function () {
    await ActionsPage.maximize_window()
})

When('I assert we are in Scorpion main page', { timeout: 30000 }, async function () {
    const element = ActionsPage.select(MainPageLocator.main_title());
    await testController.expect(element.exists).ok();
})

Then('I assert that the text is shown {string}', { timeout: 30000 }, async function (value) {
    const element = await ActionsPage.select('scorpion-snackbar').innerText;
    await testController.expect(element).contains(value)
})

When('I upload the file', { timeout: 30000 }, async function () {
    await testController.setFilesToUpload('div > scorpion-file-upload > input', '../../upload/IMG_0071.jpg')
})
