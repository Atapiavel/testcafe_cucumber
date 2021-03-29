import {Selector,t} from 'testcafe';

class LoginPage{
    constructor(){
        this.subtitleHeader = Selector('h2');
        this.email = Selector('[type="text"]');
        this.password = Selector('[type="password"]');
        this.signIn = Selector('[type="submit"]');
        this.tpRadionBtn = Selector('li:nth-child(13) [data-cy=shared-radio-circle-container]');
        this.signInBtn = Selector('button').withText('Sign In');
        this.successmsg = Selector('strong').withText('Your Business Growth');
    }
}
export default new LoginPage();