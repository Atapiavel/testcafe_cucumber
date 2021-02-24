import {ClientFunction} from 'testcafe';
import loginpage from '../pages/LoginPage_Old';
import messengerpage from '../pages/MessengerPage _Old';

const URL ="https://ui-integration.scorpion.co/messenger";
const getURL = ClientFunction(() =>window.location.href);

fixture('Messenger Fixture')
    .page(URL);

test('Messenger page Test', async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(1)
    .typeText(loginpage.email, "joehaus895@gmail.com")
    .typeText(loginpage.password, "Team123!")
    .click(loginpage.signIn)
    .wait(3000)
    // .click(messengerpage.messengerButton)
    .expect(getURL()).contains('messenger')
    .click(messengerpage.msgSearchBtn)
    .click(messengerpage.groupsBtn)
    .click(messengerpage.peopleBtn)
    .click(messengerpage.messagesBtn);
    
});