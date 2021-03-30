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
    .click(loginpage.tpRadionBtn)
    .click(loginpage.signInBtn)
    .takeScreenshot()
    .wait(3000)
    .click(phonesettingspage.addBtn)
    .click(phonesettingspage.manageNrs)
    .click(phonesettingspage.purchaseNrs)
    .click(phonesettingspage.routingConf)
    .click(phonesettingspage.addBtn)
    .typeText(phonesettingspage.confTitle, 'Auto1')
    .typeText(phonesettingspage.confDesc, 'Just for Automation purpose!')
    .click(phonesettingspage.addRoutConfBtn)
    .click(phonesettingspage.routingKebob1Row)
    .click(phonesettingspage.deleteRoutConf)
    .click(phonesettingspage.deleteConfirmBtn)
    .click(phonesettingspage.routingGrs)
    .click(phonesettingspage.manageNrs)
    .click(phonesettingspage.filterBtn)
    .click(phonesettingspage.searchBtn)
    // .wait(3000)
    .typeText(phonesettingspage.searchBtn, '415')
    .click(phonesettingspage.kebob1Row)
    .takeScreenshot();
})
});