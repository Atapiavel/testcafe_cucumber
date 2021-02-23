const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.ChatPage = {
    Email : function() {
        return select('[type="text"]')
    },

    Password : function() {
        return select('[type="password"]')
    },

    SignIn : function() {
        return select('[data-cy=login-button]')
    },

    HomePage: function() {
        return select('scorpion-layout-dashboard')
    },

    ChatButton: function() {
        return select('[title="Chat"]')
    },

    SubtitleHeader: function() {
        return select('h4')
    },

    GetStarted: function() {
        return select('[data-cy=get-started]')
    }

}