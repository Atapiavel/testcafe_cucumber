import {Selector,t} from 'testcafe';

class LoginPage{
    constructor(){
        this.subtitleHeader = Selector('h2');
        this.email = Selector('[type="text"]');
        this.password = Selector('[type="password"]');
        this.signIn = Selector('[type="submit"]');
        this.successmsg = Selector('strong').withText('Your Business Growth');
    }
}
export default new LoginPage();