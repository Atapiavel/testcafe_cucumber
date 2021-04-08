import {Selector,t} from 'testcafe';

class PhoneSettingsPage{
    constructor(){
        this.successMsg = Selector('strong').withText('Your Business Growth');
        this.addBtn = Selector('[text="Add"]');
        this.purchaseNrs = Selector('[data-name="Purchase Numbers"]');
        this.manageNrs = Selector('[data-name="Manage Numbers"]');
        this.routingConf = Selector('[data-name="Routing Configuration"]');
        this.confTitle = Selector('[label="Configuration Title"]');
        this.confDesc = Selector('[label="Configuration Description"]');
        this.addRoutConfBtn = Selector('scorpion-modal-actions > scorpion-button:nth-child(1) > button');
        this.needsConfBtn = Selector('div.nlp-pl60-pt60-pb160 [data-cy=icon]');
        this.saveBtn = Selector('[text="Save"]');
        this.configInst = Selector('[content="Configure Instructions"]');
        this.addInstBtn = Selector('[text="Add Instructions"]');
        this.deleteRoutConf = Selector('[content="Delete"]');
        this.deleteConfirmBtn = Selector('[text="Delete"]');
        this.routingGrs = Selector('[data-name="Routing Groups"]');
        this.routingKebob1Row = Selector('tr:nth-child(1) [data-cy=popup-menu-button]')
        this.searchBtn = Selector('[data-cy=button-search]');
        this.filterBtn = Selector('[data-cy=trigger-button]');
        this.cancelBtn = Selector('[data-cy=cancel-button]');
        this.kebob1Row = Selector('[data-cy=popup-menu-button]');
        this.confNumbBtn = Selector('[content="Configure"]');
        this.arrowRight = Selector('[aria-label="arrow_right"]');
      }
}
export default new PhoneSettingsPage();