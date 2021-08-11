import {Selector,t} from 'testcafe';

class MessengerSettingsPage {
    constructor(){
        this.messengerAppSettingsMngBtn = Selector('li:nth-child(6) span[data-cy=text]');            
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.userAccessTab = Selector('[class="name"]').withText('User Access');
        this.subscriptionTab = Selector('[class="name"]').withText('Subscription');
        // this.partMngBtn = Selector('span').withText('Manage')        
        this.searchBtn = Selector('[data-cy=button-search]');
        this.clearSearch = Selector('[title="Clear"]');
        this.loadMoreBtn = Selector('div:nth-child(3) > scorpion-load-more > div > scorpion-button > button');
        this.unsubscribeBtn = Selector('[type="button"]').withText('Unsubscribe')
        this.yesToUnsubBtn = Selector('[data-cy="button-comms-messenger.common.yes"]');
        this.subscribeBtn = Selector('a').withText('Subscribe');
        this.nextBtn1 = Selector('[text="Next"]').withText('Next');
        this.nextBtn2 = Selector('[text="Next"]').withText('Next');
        this.nextBtn3 = Selector('[text="Next"]').withText('Next');
        this.doneBtn = Selector('button').withText('Done');
        this.yadcloseBtn = Selector('[type="button"]').withText('Close');
      }
}
export default new MessengerSettingsPage();