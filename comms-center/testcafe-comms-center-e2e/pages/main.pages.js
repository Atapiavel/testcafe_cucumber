const MainPageLocator = require('../locators/main.locators.js');
const Asserts = require('../features/support/asserts.js');

    async function assert_main_modules() {
        Asserts.assert_exists(MainPageLocator.main_title())
        Asserts.assert_exists(MainPageLocator.growth_title())
        Asserts.assert_exists(MainPageLocator.revenue_title())
    }

module.exports = {
    assert_main_modules: assert_main_modules
};
