const SettingsPageLocator = require('../locators/settings.locators.js');
const ActionsPage = require("./actions.pages");


async function hover_more_option() {
    await ActionsPage.hover_element(SettingsPageLocator.more())
}

module.exports.hover_more_option = hover_more_option;