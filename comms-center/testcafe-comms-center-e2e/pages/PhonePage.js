const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.PhonePage = {
    HomePage: function() {
        return select('scorpion-layout-dashboard')
    },

    SearchBtn: function() {
        return select('[data-cy=button-search]')
    },

    MakeCallBtn: function() {
        return select('[data-cy=make-a-call]')
    },

    PhoneNrEntry: function() {
        return select('[data-cy=input-wrapper]')
    },

    CallBtn: function() {
        return select('[data-cy=call]')
    },

    EndCallBtn: function() {
        return select('[data-cy=end-call]')
    },

    DialPad: function() {
        return select('[data-cy=scorpion-dialer]')
    },

    ZeroBtn: function() {
        return select('[data-cy=dial-input-button0]')
    },

    OneBtn: function() {
        return select('[data-cy=dial-input-button1]')
    },

    TwoBtn: function() {
        return select('[data-cy=dial-input-button2]')
    },

    ThreeBtn: function() {
        return select('[data-cy=dial-input-button3]')
    },

    FourBtn: function() {
        return select('[data-cy=dial-input-button4]')
    },

    FiveBtn: function() {
        return select('[data-cy=dial-input-button5]')
    },

    SixBtn: function() {
        return select('[data-cy=dial-input-button6]')
    },

    SevenBtn: function() {
        return select('[data-cy=dial-input-button7]')
    },

    EightBtn: function() {
        return select('[data-cy=dial-input-button8]')
    },

    NineBtn: function() {
        return select('[data-cy=dial-input-button9]')
    }
}