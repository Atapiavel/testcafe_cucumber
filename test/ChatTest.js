import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import chatpage from '../test/pages/ChatPage_Old';

const URL ="https://ui-integration.scorpion.co";
const getURL = ClientFunction(() =>window.location.href);

fixture('Chat Fixture')
    .page(URL);
    
test('Chat page Test', async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(1)
    .typeText(loginpage.email, "joehaus895@gmail.com")
    .typeText(loginpage.password, "Team123!")
    .click(loginpage.signIn)
    .wait(3000)
    .click(chatpage.chatButton)
    .expect(getURL()).contains('chat')
    .click(chatpage.getStartedButton)
    .click(chatpage.mineTab)
    .click(chatpage.allTab);
});
