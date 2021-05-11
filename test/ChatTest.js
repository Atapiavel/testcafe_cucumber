import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import chatpage from '../test/pages/ChatPage_Old';

const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co";
const getURL = ClientFunction(() =>window.location.href);

fixture('Chat Fixture')
    .page(URL);
 
dataSet.forEach(data => {     
test('Chat page Test', async t =>{
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
    .wait(3000)
    .click(chatpage.chatButton)
    .expect(getURL()).contains('chat')
    .click(chatpage.agentAvailBtn)
    .wait(3000)
    .click(chatpage.availToggleBtn)
    .wait(3000)
    .click(chatpage.availToggleBtn)
    .wait(3000)
    .click(chatpage.agentAvailBtn)
    .wait(3000)
    .click(chatpage.mineTab)
    .wait(3000)
    .click(chatpage.allTab)
    .wait(3000)
    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);
})
});
