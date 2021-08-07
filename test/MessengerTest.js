import {Selector} from 'testcafe';
import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import messengerpage from '../test/pages/MessengerPage _Old';

const dataSet = require('../data/data.json');
const fileUpload = Selector('button[class="upload-action"]');
const iframeName = Selector('iframe[class="cke_wysiwyg_frame cke_reset"]');
// const textArea = Selector('scorpion-message-input > div > div > div.nlf-middle-between.auto');
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
    // .wait(3000)
    // .expect(homepage.subtitleHeader.exists).ok()
    // .typeText(loginpage.email, data.email)
    // .typeText(loginpage.password, data.password)
    // .click(loginpage.signIn)
    // .typeText(loginpage.searchAccount, 'tho')
    // .wait(1000)
    // .click(loginpage.tpRadionBtn)
    // .click(loginpage.signInBtn)
    // .wait(3000)
    .maximizeWindow()
    .setNativeDialogHandler(() => true)
    .wait(10000)    
    .click(messengerpage.messengerBtn)
    .expect(getURL()).contains('messenger')
    .wait(1000)
    .click(messengerpage.msgSearchBtn)
    .click(messengerpage.groupsBtn)
    .click(messengerpage.peopleBtn)
    .click(messengerpage.messagesBtn)
    .click(messengerpage.filesBtn)
    .click(messengerpage.addGroupsBtn)
    .typeText(messengerpage.groupNameInput, "Auto Test Group1")   
    .typeText(messengerpage.searchTeamMembers, "aa")
    .click(messengerpage.memberCheckboxBtn)
    .click(messengerpage.createBtn)
    // Sorting Groups Alphabetically in the Ascending order
    // .click(messengerpage.groupsSortBtn)
    // .click(messengerpage.alphaSort)
    .click(messengerpage.autotestgrpBtn)
    // .click(messengerpage.groupsKebobBtn)
    .click(messengerpage.deleteGroupBtn)
    .click(messengerpage.yesBtn)
    .click(messengerpage.addPeopleBtn)
    .typeText(messengerpage.peopleSearchInput, "shawn")
    .wait(1000)
    .click(messengerpage.peopleRadioBtn)
    .click(messengerpage.startBtn)
    // .click(messengerpage.shawnKebobBtn) 
    .click(messengerpage.hideBtn)
    .wait(1000)
    // Sorting People Alphabetically in the Ascending order
    .click(messengerpage.peopleSortBtn)
    .wait(1000)
    .click(messengerpage.alphaSort)
    .wait(1000)
    .click(messengerpage.alphaSort)
    .wait(1000)
    .click(messengerpage.groupsSortBtn)
    .wait(1000)
    .click(messengerpage.alphaSort)
    .wait(1000)
    .click(messengerpage.alphaSort)
    .wait(1000)
    .click(messengerpage.aaronBtn)
    .wait(10000)
    .switchToIframe(iframeName)
    .click(messengerpage.messageField)
    .pressKey('ctrl+a delete')
    .typeText(messengerpage.messageField, "Hey Aaron. What's happening dude? :smiling_face  :smiling_face_with_sunglasses  :man_dancing   You get tons of this from my automation!  :thumbs_up")
    .switchToMainWindow()
    .click(messengerpage.sendMessageBtn)
    .click(messengerpage.emojiBtn)
    .click(messengerpage.maskEmoji)
    .click(messengerpage.sendMessageBtn)
    .click(messengerpage.paperClipBtn)
    .expect(fileAttachment.exists).ok()
    .click(fileUpload)
    .click(messengerpage.cancelModalBtn)
    // Sorring People Alphabetically in the Descending order
    // .click(messengerpage.peopleSortBtn)
    // .click(messengerpage.alphaSort)
    //  // Sorring Groups Alphabetically in the Descending order
    // .click(messengerpage.groupsSortBtn)
    // .click(messengerpage.alphaSort)
    .click(messengerpage.appearAsAwayBtn)
    .wait(1000)
    .click(messengerpage.aAAToggleBtn)
    .wait(1000)
    .click(messengerpage.aAAToggleBtn)
    .wait(1000)
    .typeText(messengerpage.aAAInputField, "Hey I'm here to chat!!!")
    // .wait(10000)
    // .click(messengerpage.aAAEmojiBtn)
    // .wait(1000)
    // .click(messengerpage.dromedaryCamelBtn)
    .wait(1000)
    .click(messengerpage.appearAsAwayBtn)
    .wait(2000)
    .click(messengerpage.appearAsAwayBtn)
    .wait(1000)
    .click(messengerpage.clearBtn)
    .wait(1000)
    .click(messengerpage.appearAsAwayBtn)
    .wait(1000)      
    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);
    
})    
});
