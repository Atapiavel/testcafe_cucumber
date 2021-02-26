import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.partmngbtn = Selector('[text="Manage"]');
      }
}
export default new ChatSettingsPage();