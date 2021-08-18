import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import chatsettingspage from '../test/pages/ChatSettingsPage';

// Adding this const for the Data Driven testing
const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/settings/apps";
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
    .click(chatsettingspage.chatAppSettingsMngBtn)
    .click(chatsettingspage.partMngBtn)
    .wait(3000)
    .click(chatsettingspage.closeMngBtn)
    .wait(3000)
    // Agents & Hours Tab
    .click(chatsettingspage.agentNHrsTab)
    .wait(3000)
    // Service Overview
    .click(chatsettingspage.serviceOverviewTab)
    .wait(3000)
    // Budget
    .click(chatsettingspage.budgetTab)
    .wait(3000)
    // Knowledge Base
    .click(chatsettingspage.knowledgeBaseTab)
    .wait(3000)
    .click(chatsettingspage.saveNExitBtn)
    .wait(3000)
    .click(chatsettingspage.desktopChatBtn)
    .wait(3000)    
    .click(chatsettingspage.mobileChatBtn)
    .wait(3000)
    .click(chatsettingspage.fbChatBtn)
    .wait(3000)
    .click(chatsettingspage.chatWidDisBtn)
    .click(chatsettingspage.allowSomeBtn)
    .wait(3000)
    .click(chatsettingspage.closeMngBtn)
    .wait(3000)
    .click(chatsettingspage.blockSomeBtn)
    .wait(3000)
    .click(chatsettingspage.closeMngBtn);
    })
});