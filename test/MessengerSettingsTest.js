import {ClientFunction} from 'testcafe';
import loginpage from './pages/LoginPage_Old';
import messengersettingspage from '../test/pages/MessengerSettingsPage';

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

    .setTestSpeed(1)
    .typeText(loginpage.email, "joehaus895@gmail.com")
    .typeText(loginpage.password, "Team123!")
    .click(loginpage.signIn)

    // .typeText(loginpage.email, data.email)
    // .typeText(loginpage.password, data.password)
    // .click(loginpage.signIn)
    // .typeText(loginpage.searchAccount, 'tho')
    // .wait(1000)
    // .click(loginpage.tpRadionBtn)
    // .click(loginpage.signInBtn)
    // .takeScreenshot()
    .maximizeWindow()
    .wait(10000)
    .click(messengersettingspage.messengerAppSettingsMngBtn)
    .click(messengersettingspage.userAccessTab)
    .wait(1000)
    .click(messengersettingspage.searchBtn)
    .typeText(messengersettingspage.searchBtn, 'aaron')
    .click(messengersettingspage.clearSearch)
    .wait(10000)
    .click(messengersettingspage.loadMoreBtn)
    // .wait(3000)
    .click(messengersettingspage.subscriptionTab)
    // Space here for Unsubscibe/Subscribe steps
    .click(messengersettingspage.unsubscribeBtn)
    .click(messengersettingspage.yesToUnsubBtn)
    .click(messengersettingspage.subscribeBtn)
    .click(messengersettingspage.nextBtn1)
    .click(messengersettingspage.nextBtn2)
    .click(messengersettingspage.nextBtn3)
    .click(messengersettingspage.doneBtn)
    .click(messengersettingspage.yadcloseBtn)

    .click(messengersettingspage.nextBtn1)
    .click(messengersettingspage.nextBtn2)
    .click(messengersettingspage.nextBtn3)
    .click(messengersettingspage.doneBtn)
    .click(messengersettingspage.yadcloseBtn)

    .click(loginpage.settingsBtn)
    .click(loginpage.signOutBtn);

    })
});