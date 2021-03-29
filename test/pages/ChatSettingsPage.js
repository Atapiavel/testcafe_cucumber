import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){                
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.partmngbtn = Selector('div:nth-child(1) > scorpion-service-description > scorpion-ui-card > div > scorpion-button > button');        
        this.closemngbtn = Selector('[data-cy=exit-button]');
        this.bugetbtn = Selector('strong').withText('Budget');
        this.genwidgbtn = Selector('strong').withText('General Widget');
        this.deskwidgbtn = Selector('strong').withText('Desktop Widget');
        this.mobilewidgbtn = Selector('strong').withText('Mobile Widget');
        this.fbchatbtn = Selector('strong').withText('Facebook Chat');
      }
}
export default new ChatSettingsPage();