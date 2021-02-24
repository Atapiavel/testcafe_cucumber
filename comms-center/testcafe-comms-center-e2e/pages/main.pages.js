const MainPageLocator = require('../locators/main.locators.js');
const Asserts = require('../features/support/asserts.js');

    async function assert_main_modules() {
        Asserts.assert_text(MainPageLocator.main_title(), "XXXXXXXX")
        Asserts.assert_text(MainPageLocator.growth_title(), "XXXXXXXX")
        Asserts.assert_text(MainPageLocator.revenue_title(), "XXXXXXXX")
    }

module.exports = {
    assert_main_modules: assert_main_modules
};
