const { Selector } = require('testcafe');
const iframeName = Selector('iframe[title="Rich Text Editor, editor1"]');

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
    
    return select('div[class="nlf-middle-between auto"]')
}

function SendMessageBtn() {
    return select('[class="send-message"]')
}

function EmojiBtn() {
    return select('scorpion-message-input > div > div > div > scorpion-emoji-select > div > scorpion-button-icon > button > scorpion-icon > div > svg')
}

function RelaxedEmoji() {
    return select('[title="relaxed"]')
}

function paperClipBtn() {
    return select('scorpion-button-icon[icon="paperclip"]')
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
    SendMessageBtn: SendMessageBtn,
    EmojiBtn: EmojiBtn,
    RelaxedEmoji: RelaxedEmoji,
    paperClipBtn: paperClipBtn
};
