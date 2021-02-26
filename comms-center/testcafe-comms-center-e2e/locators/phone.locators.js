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

function functionPhoneNrEntry() {
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
function ZeroBtn() {
    return select('[data-cy=dial-input-button0]')
} 

function OneBtn() {
    return select('[data-cy=dial-input-button1]')
} 
function TwoBtn() {
    return select('[data-cy=dial-input-button2]')
}

function ThreeBtn() {
    return select('[data-cy=dial-input-button3]')
}
function
    FourBtn() {
    return select('[data-cy=dial-input-button4]')
}
function
    FiveBtn() {
    return select('[data-cy=dial-input-button5]')
},

function SixBtn() {
    return select('[data-cy=dial-input-button6]')
}

function SevenBtn() {
    return select('[data-cy=dial-input-button7]')
}

function EightBtn () {
    return select('[data-cy=dial-input-button8]')
}

function NineBtn() {
    return select('[data-cy=dial-input-button9]')
}

module.exports = {
    HomePage:HomePage,
    SearchBtn:SearchBtn,
    MakeCallBtn:MakeCallBtn,
    functionPhoneNrEntry:functionPhoneNrEntry,
    CallBtn:CallBtn,
    EndCallBtn:EndCallBtn,
    DialPad:DialPad,
    ZeroBtn:ZeroBtn,
    OneBtn:OneBtn,
    TwoBtn:TwoBtn,
    ThreeBtn:ThreeBtn,
    FourBtn:FourBtn,
    FiveBtn:FiveBtn,
    SixBtn:SixBtn,
    SevenBtn:SevenBtn,
    EightBtn:EightBtn,
    NineBtn:NineBtn
};
