import {Selector,t} from 'testcafe';

class PhoneSettingsPage{
    constructor(){
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.mangageForPhoneBtn = Selector('li:nth-child(7) > scorpion-ui-card > div > div > scorpion-link > button > span');
        this.addBtn = Selector('button').withText('Add');
        this.purchaseNrs = Selector('[data-name="Purchase Numbers"]');
        this.manageNrs = Selector('[data-name="Manage Numbers"]');
        this.routingConf = Selector('[data-name="Routing Configuration"]');
        this.confTitle = Selector('div[data-mask="input"]');
        this.confDesc = Selector('scorpion-textarea[formcontrolname="description"]');
        this.addRoutConfBtn = Selector('scorpion-modal-actions > scorpion-button:nth-child(1) > button');
        this.needsConfBtn = Selector('div.nlp-pl60-pt60-pb160 [data-cy=icon]');
        this.saveBtn = Selector('[type="button"]').withText('Save');
        this.configInst = Selector(':nth-child(3) [class="menu-item-label"]');
        this.addInstBtn = Selector('scorpion-button[type="button"]').withText('Add Instructions');
        this.arrowToRightBtn = Selector('[data-cy=collapse-button]');
        this.deleteRoutConf = Selector('[class="menu-item-label"]').withText('Delete');
        this.deleteConfirmBtn = Selector('[type="button"]').withText('Delete');
        this.routingGrs = Selector('[data-name="Routing Groups"]');
        this.routingKebob1Row = Selector('tr:nth-child(1) [data-cy=popup-menu-button]')
        this.searchBtn = Selector('[data-cy=button-search]');
        this.filterBtn = Selector('[data-cy=trigger-button]');
        this.cancelBtn = Selector('[data-cy=cancel-button]');
        this.kebob1Row = Selector('[data-cy=popup-menu-button]');
        this.confNumbBtn = Selector('[class="menu-item-label"]').withText('Configure');
        this.arrowRight = Selector('[aria-label="arrow_right"]');
      }
}
export default new PhoneSettingsPage();