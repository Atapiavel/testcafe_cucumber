import {Selector,t} from 'testcafe';

class PhoneSettingsPage{
    constructor(){
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.addbtn = Selector('[text="Add"]');
        this.purchasenrs = Selector('[data-name="Purchase Numbers"]');
        this.managenrs = Selector('[data-name="Manage Numbers"]');
        this.routingconf = Selector('[data-name="Routing Configuration"]');
        this.routinggrs = Selector('[data-name="Routing Groups"]');
        this.routingKebob1row = Selector('tr:nth-child(1) > td.scorpion-cell.cdk-cell.icon-col.cdk-column-menus.scorpion-column-menus > scorpion-popup-menu > button > scorpion-icon')
        this.searchbtn = Selector('[data-cy=button-search]');
        this.filterbtn = Selector('[data-cy=trigger-button]');
        this.cancelbtn = Selector('[data-cy=cancel-button]');
        this.kebob1row = Selector('[data-cy=popup-menu-button]');
      }
}
export default new PhoneSettingsPage();