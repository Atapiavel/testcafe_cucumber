const MainPageLocator = require('../locators/main.locators.js');
const Asserts = require('../features/support/asserts.js');

    async function assert_main_module() {
        Asserts.assert_exists(MainPageLocator.main_title())
    }

module.exports = {
    assert_main_module: assert_main_module
};
