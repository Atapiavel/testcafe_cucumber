const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function HomePage() {
    return select('scorpion-layout-dashboard')
}

function SearchBtn() {
    return select('[data-cy=button-search]')
}

function MakeCallBtn() {
    return select('[data-cy=make-a-call]')
}

function PhoneNrEntry() {
    return select('[data-cy=input-wrapper]')
}

function CallBtn() {
    return select('[data-cy=call]')
}

function EndCallBtn() {
    return select('[data-cy=end-call]')
}

function DialPad() {
    return select('[data-cy=scorpion-dialer]')
}

function PhoneBtn() {
    return select('[data-cy=dock-app-tile-comms-phone]')
}

function MiniBtn() {
    return select('[data-cy=minimize-dialer]')
}

function MaxiBtn() {
    return select('[data-cy=maximize-dialer]')
}

function EndCallMinBtn() {
    return select('button.mod-red')
}

function DragBtn() {
    return select('[aria-label="drag"]')
}


module.exports = {
    HomePage: HomePage,
    SearchBtn: SearchBtn,
    MakeCallBtn: MakeCallBtn,
    PhoneNrEntry: PhoneNrEntry,
    CallBtn: CallBtn,
    EndCallBtn: EndCallBtn,
    DialPad: DialPad,
    PhoneBtn: PhoneBtn,
    MiniBtn: MiniBtn,
    MaxiBtn: MaxiBtn,
    EndCallMinBtn: EndCallMinBtn,
    DragBtn: DragBtn
};
