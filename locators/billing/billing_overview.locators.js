function billing_history() {
    return "[data-cy=text]"
}

function contact_name() {
    return "body > scorpion-root > scorpion-main > div > ng-component > ng-component > scorpion-layout-wide > main > div > div > div > div > div > div > scorpion-ui-card > scorpion-billing-contact > ul > li > div > span"
}

module.exports = {
    billing_history: billing_history,
    contact_name: contact_name
};