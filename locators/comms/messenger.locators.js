const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function MessengerBtn() {
    return '[data-cy=dock-app-tile-comms-messenger]'
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

function PeopleShowMoreBtn() {
    return select('section:nth-child(3) > div > div.ta\:center.nlp-pt15 > scorpion-button > button')
}

function AaronBtn() {
    return select('scorpion-ui-card').withText('Aaron McFly')
}

function MessageAaron() {
    return select('[placeholder="Message Aaron..."]')
}

function SendMessageBtn() {
    return select('[class="send-message"]')
}

module.exports = {
    MessengerBtn: MessengerBtn,
    HomePage: HomePage,
    SearchBtn: SearchBtn,
    PeopleBtn: PeopleBtn,
    GroupsBtn: GroupsBtn,
    MessagesBtn: MessagesBtn,
    PeopleShowMoreBtn: PeopleShowMoreBtn,
    AaronBtn: AaronBtn,
    MessageAaron: MessageAaron,
    SendMessageBtn: SendMessageBtn
};
