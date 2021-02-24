
    function main_title() {
        return 'body > scorpion-root > scorpion-main > div > scorpion-home-dashboardv2 > scorpion-layout-dashboard > div > header > strong'
    }

    function growth_title() {
        return 'scorpion-ui-card > header > strong'
    }

    function revenue_title() {
        return 'body > scorpion-root > scorpion-main > div > scorpion-home-dashboardv2 > scorpion-layout-dashboard > div > main > div:nth-child(1) > div.nlf.two-thirds.ng-star-inserted > scorpion-ui-card > header > strong'
    }

    function settings_button() {
        return '.ng-star-inserted > .avatar.avatar-color-0.avatar-extra-small.has-image'
    }

    function settings_options() {
        return '.label'
    }

module.exports = {
    main_title: main_title,
    growth_title: growth_title,
    revenue_title: revenue_title,
    settings_button: settings_button,
    settings_options: settings_options
};
