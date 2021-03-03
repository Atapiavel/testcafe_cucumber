import {ClientFunction} from 'testcafe';
import loginpage from '../test/pages/LoginPage_Old';
import homepage from '../test/pages/HomePage';

const URL ="https://ui-integration.scorpion.co/sign-in";
const getURL = ClientFunction(() =>window.location.href);

fixture('Login Fixture')
    .page(URL);

test('Assert Login Page Test', async t =>{
    await t
    .expect(getURL()).eql(URL)
    .expect(loginpage.subtitleHeader.exists).ok();
});

test('Enter Login Test', async t =>{
    await t
    .typeText(loginpage.email, "joehaus895@gmail.com")
    .typeText(loginpage.password, "Team123!")
    .click(loginpage.signIn)
    .wait(3000)
    .expect(homepage.subtitleHeader.exists).ok();    
});
