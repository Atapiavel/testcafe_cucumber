import {Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import messengerpage from '../test/pages/MessengerPage _Old';

const dataSet = require('../data/data.json');
const fileUpload = Selector('button[class="upload-action"]');
// const fileUpload = Selector('scorpion-file-upload>input[type="file"]');
const fileAttachment = Selector('scorpion-modal-title').withText('File Attachment');
const uploadSendBtn = Selector('button').withText('Send');
const URL ="https://ui-integration.scorpion.co/";
const getURL = ClientFunction(() =>window.location.href);

fixture('Messenger Fixture')
    .page(URL);

dataSet.forEach(data => {
test('Messenger page Test', async t =>{
    await t
    .setTestSpeed(1)
    .typeText(loginpage.email, "joehaus895@gmail.com")
    .typeText(loginpage.password, "Team123!")
    .click(loginpage.signIn)
    .wait(3000)
    // .expect(homepage.subtitleHeader.exists).ok()
    // .typeText(loginpage.email, data.email)
    // .typeText(loginpage.password, data.password)
    // .click(loginpage.signIn)
    // .typeText(loginpage.searchAccount, 'tho')
    // .wait(1000)
    // .click(loginpage.tpRadionBtn)
    // .click(loginpage.signInBtn)
    .wait(3000)
    .maximizeWindow()
    // .expect(getURL()).contains('messenger')
    .setNativeDialogHandler(() => true)    
    // .hover(messengerpage.msgSearchBtn)
    .click(messengerpage.messengerBtn)
    .wait(1000)
    .click(messengerpage.msgSearchBtn)
    .click(messengerpage.groupsBtn)
    .click(messengerpage.peopleBtn)
    .click(messengerpage.messagesBtn)
    .click(messengerpage.filesBtn)
    .click(messengerpage.addGroupsBtn)
    .typeText(messengerpage.groupNameInput, "Auto Test Group1")   
    .typeText(messengerpage.searchTeamMembers, "aa")
    .wait(1000)
    .click(messengerpage.memberCheckboxBtn)
    .click(messengerpage.createBtn)
    .click(messengerpage.groupsKebobBtn)
    .wait(1000)
    .click(messengerpage.deleteGroupBtn)
    .click(messengerpage.yesBtn)
    .wait(1000)
    .click(messengerpage.addPeopleBtn)
    .typeText(messengerpage.peopleSearchInput, "shawn")
    .wait(1000)
    .click(messengerpage.peopleRadioBtn)
    .click(messengerpage.startBtn)
    .click(messengerpage.shawnKebobBtn)
    .wait(1000)
    .click(messengerpage.hideBtn)
    .wait(1000)
    .click(messengerpage.aaronBtn)
    .wait(1000)
    .click(messengerpage.paperClipBtn)
    .wait(1000)
    .expect(fileAttachment.exists).ok()
    .wait(1000)
    // .click('[aria-label="close dialog"]')
    .click(fileUpload)
    .wait(1000)
    .click(messengerpage.cancelModalBtn)
    // .debug()
    // .setFilesToUpload((fileUpload).withAttribute('type', 'file'), [
    //     '../../upload/IMG_0071.jpg',
    //     '../../upload/1.mp4'
    // ])
    // .setFilesToUpload(fileUpload, '../../upload/IMG_0071.jpg')
    // .wait(3000)
    // .clearUpload(fileUpload)
    // .setFilesToUpload(fileUpload, '../../upload/1.mp4')
    // .wait(3000)
    // .click(uploadSendBtn)
    // .wait(3000)
    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);
    
})    
});
