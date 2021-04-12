import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import messengerpage from '../test/pages/MessengerPage _Old';

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
    // .click(messengerpage.messengerBtn)
    .expect(getURL()).contains('messenger')
    .setNativeDialogHandler(() => true)    
    .hover(messengerpage.msgSearchBtn)
    .wait(1000)
    .click(messengerpage.msgSearchBtn)
    .click(messengerpage.groupsBtn)
    .click(messengerpage.peopleBtn)
    .click(messengerpage.messagesBtn)
    .click(messengerpage.addGroupsBtn)
    .typeText(messengerpage.groupNameInput, "Auto Test Group1")   
    .typeText(messengerpage.searchTeamMembers, "mehrdad")
    .wait(1000)
    .click(messengerpage.selectMemberRadio)
    .click(messengerpage.createBtn)
    .click(messengerpage.kebobBtn)
    .wait(1000)
    .click(messengerpage.deleteGroupBtn)
    .click(messengerpage.yesBtn)
    .wait(1000)
    .click(messengerpage.addCoworkersBtn)
    .typeText(messengerpage.coworkerSearchInput, "shawn")
    .wait(1000)
    .click(messengerpage.continueBtn)
    .click(messengerpage.kebobBtn)
    .wait(1000)
    .click(messengerpage.hideBtn)
    .wait(1000)
    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);
    
    
});