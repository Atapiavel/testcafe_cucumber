import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import phonesettingspage from '../test/pages/PhoneSettingsPage';

// Adding this const for the Data Driven testing
const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/settings/apps/phone/manage-phone-numbers/";
const getURL = ClientFunction(() =>window.location.href);

fixture('Phone Settings Fixture')
    .page(URL);

// Using data object from the data.json file
dataSet.forEach(data => {
test('Enter Phone Settings Test', async t =>{
    await t
    .maximizeWindow()
    .setTestSpeed(1)
    .typeText(loginpage.email, data.email)
    .typeText(loginpage.password, data.password)
    .click(loginpage.signIn)
    .takeScreenshot()
    .wait(3000)
    .click(phonesettingspage.addbtn)
    .click(phonesettingspage.managenrs)
    .click(phonesettingspage.purchasenrs)
    .click(phonesettingspage.routingconf)
    .click(phonesettingspage.routinggrs)
    .click(phonesettingspage.managenrs)
    .click(phonesettingspage.searchbtn)
    .click(phonesettingspage.filterbtn)
    .click(phonesettingspage.cancelbtn)
    // .takeScreenshot()
    .click(phonesettingspage.searchbtn)
    .wait(3000)
    .typeText(phonesettingspage.searchbtn, '415')
    .click(phonesettingspage.kebob1row)
    .takeScreenshot();
})
});