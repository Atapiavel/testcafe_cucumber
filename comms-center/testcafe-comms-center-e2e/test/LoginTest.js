import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';

// Adding this const for the Data Driven testing
const dataSet = require('../data/data.json');
const URL ="https://ui-integration.scorpion.co/sign-in";
const getURL = ClientFunction(() =>window.location.href);

fixture('Login Fixture')
    .page(URL);

test('Assert Login Page Test', async t =>{
    await t
    .expect(getURL()).eql(URL)
    .expect(loginpage.subtitleHeader.exists).ok();
});

// Using data object from the data.json file
dataSet.forEach(data => {
test('Enter Login Test', async t =>{
    await t
    .typeText(loginpage.email, data.email)
    .typeText(loginpage.password, data.password)
    .click(loginpage.signIn)
    .takeScreenshot();

})
});