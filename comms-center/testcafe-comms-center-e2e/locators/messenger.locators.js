const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function MessengerBtn() {
    return '[data-cy="dock-app-tile-comms-messenger"]'
}

function HomePage() {
    return select('scorpion-layout-dashboard')
}

function SearchBtn() {
    return select("scorpion-button[title='Search']")
}

function PeopleBtn() {
    return select('scorpion-tile-select-item:nth-of-type(1)')
}

function GroupsBtn() {
    return select('scorpion-tile-select-item:nth-of-type(2)')
}

function MessagesBtn() {
    return select('scorpion-tile-select-item:nth-of-type(3)')
}

module.exports = {
    MessengerBtn: MessengerBtn,
    HomePage: HomePage,
    SearchBtn: SearchBtn,
    PeopleBtn: PeopleBtn,
    GroupsBtn: GroupsBtn,
    MessagesBtn: MessagesBtn
};
