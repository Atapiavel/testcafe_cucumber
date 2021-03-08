import {Selector,t} from 'testcafe';

class PhoneSettingsPage{
    constructor(){
        this.successmsg = Selector('strong').withText('Your Business Growth');
        this.addbtn = Selector('[text="Add"]');
        this.purchasenrs = Selector('[data-name="Purchase Numbers"]');
        this.managenrs = Selector('[data-name="Manage Numbers"]');
        this.routingconf = Selector('[data-name="Routing Configuration"]');
        this.routinggrs = Selector('[data-name="Routing Groups"]');
        this.searchbtn = Selector('[data-cy=button-search]');
        this.filterbtn = Selector('[data-cy=trigger-button]');
        this.cancelbtn = Selector('[data-cy=cancel-button]');
        this.kebob1row = Selector('[data-cy=icon]').withExactText('SAN FRANCISCO');
      }
}
export default new PhoneSettingsPage();