const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.ChatPage = {
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
        return select('scorpion-ui-card:nth-of-type(1)  .nlp-pt30 > .button')
    },

    ChatTitle:  function() {
        return select('[data-cy="header"]')
    },

    ChatDashboardTtitle: function() {
        return select('data-cy="icon-container"')
    }

}