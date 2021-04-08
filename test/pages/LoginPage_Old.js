import {Selector,t} from 'testcafe';

class LoginPage{
    constructor(){
        this.subtitleHeader = Selector('h2');
        this.email = Selector('[type="text"]');
        this.password = Selector('[type="password"]');
        this.signIn = Selector('[type="submit"]');
        this.searchAccount = Selector('[aria-label="Search"]');
        this.tpRadionBtn = Selector('[data-cy=shared-radio-circle-container]');
        this.signInBtn = Selector('button').withText('Sign In');
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.settingsBtn = Selector('div > scorpion-avatar > button');
        this.signOutBtn = Selector('.label').withText('Sign Out');
    }
}
export default new LoginPage();