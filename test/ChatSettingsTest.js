import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import chatsettingspage from '../test/pages/ChatSettingsPage';

// Adding this const for the Data Driven testing
const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/settings/apps/chat/agents";
const getURL = ClientFunction(() =>window.location.href);

fixture('Chat Settings Fixture')
    .page(URL);

// Using data object from the data.json file
dataSet.forEach(data => {
test('Enter Chat Settings Test', async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(1)
    .typeText(loginpage.email, data.email)
    .typeText(loginpage.password, data.password)
    .click(loginpage.signIn)
    .typeText(loginpage.searchAccount, 'tho')
    .wait(1000)
    .click(loginpage.tpRadionBtn)
    .click(loginpage.signInBtn)
    .takeScreenshot()
    .wait(3000)
    .click(chatsettingspage.partMngBtn)
    .wait(3000)
    .click(chatsettingspage.closeMngBtn)
    .wait(3000)
    .click(chatsettingspage.budgetBtn)
    .wait(3000)
    .click(chatsettingspage.chatHrsBtn)
    .wait(3000)
    .click(chatsettingspage.chatWidDisBtn)
    .wait(3000)
    .click(chatsettingspage.desktopChatBtn)
    .wait(3000)
    .click(chatsettingspage.mobileChatBtn)
    .wait(3000)
    .click(chatsettingspage.fbChatBtn)
    .wait(3000)
    .click(chatsettingspage.budgetBtn);
})
});