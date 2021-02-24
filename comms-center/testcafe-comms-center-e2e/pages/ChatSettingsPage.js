import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){
        // this.subtitleHeader = Selector('h2');
        // this.email = Selector('[type="text"]');
        // this.password = Selector('[type="password"]');
        // this.signIn = Selector('[type="submit"]');
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.partmngbtn = Selector('[text="Manage"]');
      }
}
export default new ChatSettingsPage();