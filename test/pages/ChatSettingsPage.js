import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){
        this.chatAppSettingsMngBtn = Selector('li:nth-child(1) span[data-cy=text]');            
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.yourServicepartMngBtn = Selector('scorpion-service-description [type="button"]');
        // this.partMngBtn = Selector('span').withText('Manage')        
        this.closeMngBtn = Selector('[data-cy=exit-button]');
        this.budgetBtn = Selector('strong').withText('Budget');
        this.chatHrsBtn = Selector('strong').withText('Chat Hours');
        this.chatWidDisBtn = Selector('strong').withText('Chat Widget Display');
        this.desktopChatBtn = Selector('strong').withText('Desktop Chat')
        this.mobileChatBtn = Selector('strong').withText('Mobile Chat/SMS');
        this.fbChatBtn = Selector('strong').withText('Facebook Chat');
      }
}
export default new ChatSettingsPage();