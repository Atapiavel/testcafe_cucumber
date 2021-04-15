import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import phonepage from '../test/pages/PhonePage_Old';

const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/phone";
const getURL = ClientFunction(() =>window.location.href);

fixture('Phone Fixture')
    .page(URL);
    
dataSet.forEach(data => {    
test('Phone page Test', async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(0.1)
    .typeText(loginpage.email, data.email)
    .typeText(loginpage.password, data.password)
    .click(loginpage.signIn)
    .typeText(loginpage.searchAccount, 'tho')
    .wait(1000)
    .click(loginpage.tpRadionBtn)
    .click(loginpage.signInBtn)
    .wait(3000)
    // .click(phonepage.phoneButton)    
    .expect(getURL()).contains('phone')
    .click(phonepage.searchBtn)
    .click(phonepage.makeCallBtn)
    .click(phonepage.phoneNrEntry)
    .typeText(phonepage.phoneNrEntry, data.phoneNr)

    .click(phonepage.callBtn)
    .click(phonepage.collapseBtn)
    .click(phonepage.miniBtn)
    .click(phonepage.maxiBtn)
    .click(phonepage.collapseBtn)
    .click(phonepage.miniBtn)
    .click(phonepage.maxiBtn)
    .click(phonepage.sidePanelBtn)
    
    // .hover(phonepage.participants)

    .click(phonepage.exitBtn)
    .click(phonepage.endCallBtn)
    .click(phonepage.makeCallBtn)
    .click(phonepage.dialFour)
    .click(phonepage.dialOne)
    .click(phonepage.dialFive)

    .click(phonepage.dialEight)
    .click(phonepage.dialThree)
    .click(phonepage.dialSeven)
    
    .click(phonepage.dialFour)
    .click(phonepage.dialThree)
    .click(phonepage.dialOne)
    .click(phonepage.dialZero)
    
    .drag(phonepage.dragBtn, -360, -5, {offsetX: 10, offsetY: 10})
    .click(phonepage.callBtn)
    .click(phonepage.miniBtn)
    .click(phonepage.endCalMin)
    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);
})
});