import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import chatsettingspage from '../test/pages/ChatSettingsPage';

// Adding this const for the Data Driven testing
const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/settings/apps/chat/agents";
const getURL = ClientFunction(() =>window.location.href);

fixture('Chat Settings Fixture')
    .page(URL);

// Using data object from the data.json file
dataSet.forEach(data => {
test('Enter Chat Settings Test', async t =>{
    await t
    .typeText(loginpage.email, data.email)
    .typeText(loginpage.password, data.password)
    .click(loginpage.signIn)
    .takeScreenshot()
    .wait(3000)
    .click(chatsettingspage.partmngbtn);
})
});