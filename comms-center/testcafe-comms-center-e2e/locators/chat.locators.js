const {Selector} = require('testcafe') ;

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

function HomePage() {
        return select('scorpion-layout-dashboard')
    }

function ChatButton() {
        return select('[title="Chat"]')
    }

function SubtitleHeader() {
        return select('h4')
    }

function GetStarted() {
        return select('scorpion-ui-card:nth-of-type(1)  .nlp-pt30 > .button')
    }

function ChatTitle() {
        return select('[data-cy="header"]')
    }

function ChatDashboardTtitle() {
        return select('data-cy="icon-container"')
    }

    module.exports = {
        HomePage: HomePage,
        ChatButton: ChatButton,
        SubtitleHeader: SubtitleHeader,
        GetStarted: GetStarted,
        ChatTitle: ChatTitle,
        ChatDashboardTtitle: ChatDashboardTtitle
    };
    