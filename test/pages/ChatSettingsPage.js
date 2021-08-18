import {Selector,t} from 'testcafe';

class ChatSettingsPage{
    constructor(){
        this.chatAppSettingsMngBtn = Selector('li:nth-child(1) span[data-cy=text]');            
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.yourServicepartMngBtn = Selector('scorpion-service-description [type="button"]');
        this.partMngBtn = Selector('div:nth-child(1) scorpion-button [type="button"]');        
        this.closeMngBtn = Selector('[data-cy=exit-button]');
        this.settingsTab = Selector('[class="name"]').withText('Settings');
        this.agentNHrsTab = Selector('[class="name"]').withText('Agents & Hours');
        this.budgetTab = Selector('[class="name"]').withText('Budget');        
        this.serviceOverviewTab = Selector('[class="name"]').withText('Service Overview');
        this.knowledgeBaseTab = Selector('[class="name"]').withText('Knowledge Base');
        this.saveNExitBtn = Selector('[type="button"]').withText('Save & Exit');
        this.chatWidDisBtn = Selector('strong').withText('Chat Widget Display');
        this.allowSomeBtn = Selector('[data-cy=tile-select-item]').withText('Allow Some');
        this.blockSomeBtn = Selector('[data-cy=tile-select-item]').withText('Block Some');        
        this.desktopChatBtn = Selector('strong').withText('Desktop Chat');
        this.mobileChatBtn = Selector('strong').withText('Mobile Chat/SMS');
        this.fbChatBtn = Selector('strong').withText('Facebook Chat');
      }
}
export default new ChatSettingsPage();