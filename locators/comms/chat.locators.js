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
        return select('[data-cy=get-started]')
    }

function ChatTitle() {
        return select('[data-cy=header]')
    }

function ChatDashboardTtitle() {
        return select('[data-cy=icon-container]')
    }
    function AgentAvailBtn() {
        return select('[title="Customer Service Agent Availability"]')
    }

function AvailToggleBtn() {
        return select('[class="toggle"]')
    }

function MineBtn() {
        return select('[data-name="Mine"]')
    }

function AllBtn() {
        return select('[data-name="All"]')
    }    

    module.exports = {
        HomePage: HomePage,
        ChatButton: ChatButton,
        SubtitleHeader: SubtitleHeader,
        GetStarted: GetStarted,
        ChatTitle: ChatTitle,
        ChatDashboardTtitle: ChatDashboardTtitle,
        AgentAvailBtn: AgentAvailBtn,
        AvailToggleBtn: AvailToggleBtn,
        MineBtn: MineBtn,
        AllBtn: AllBtn
    };
    