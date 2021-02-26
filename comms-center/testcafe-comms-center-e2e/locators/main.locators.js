const { Selector } = require('testcafe');

    function main_title() {
        return Selector('strong').withText('Your Business Growth');
    }

    function settings_button() {
        return '.ng-star-inserted > .avatar.avatar-color-0.avatar-extra-small.has-image'
    }

    function settings_options() {
        return '.label'
    }

module.exports = {
    main_title: main_title,
    // growth_title: growth_title,
    // revenue_title: revenue_title,
    settings_button: settings_button,
    settings_options: settings_options
};
