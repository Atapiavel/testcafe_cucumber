const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}
exports.LoginPage = {
    Email : function() {
        return select('[type="text"]')
    },

    Password : function() {
        return select('[type="password"]')
    },

    SignIn : function() {
        return select('[type="submit"]')
    },

    SuccessfulMessage: function() {
        return select('strong').withText('Your Business Growth')
    }
}