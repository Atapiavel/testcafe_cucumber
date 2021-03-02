const { Selector } = require('testcafe');

    function main_title() {
        return Selector('strong').withText('Your Business Growth');
    }

    function settings_button() {
        return '[data-cy=user-menu]'
    }

    function settings_options() {
        return '.label'
    }

module.exports = {
    main_title: main_title,
    settings_button: settings_button,
    settings_options: settings_options
};
