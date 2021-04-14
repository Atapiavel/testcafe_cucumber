import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){                
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.partMngBtn = Selector('div:nth-child(1) > scorpion-service-description > scorpion-ui-card > div > scorpion-button > button');
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