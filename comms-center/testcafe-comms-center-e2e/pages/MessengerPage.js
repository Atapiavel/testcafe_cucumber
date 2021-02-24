const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.MessengerPage = {
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

    SearchBtn: function() {
        return select('[data-cy=search-button]')
    },

    PeopleBtn: function() {
        return select('[title="comms-messenger.enum.people-tooltip"]')
    },

    GroupsBtn: function() {
        return select('[title="comms-messenger.enum.groups-tooltip"]')
    },

    MessagesBtn: function() {
        return select('[title="comms-messenger.enum.messages-tooltip"]')
    }
}