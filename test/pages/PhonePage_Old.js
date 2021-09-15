import {Selector,t} from 'testcafe';

class PhonePage{
    constructor(){
        this.subtitleHeader = Selector('strong')
        .withText('Phone');
        this.phoneBtn = Selector('[data-cy=dock-app-tile-comms-phone]');
        this.searchBtn = Selector('[data-cy=button-search]');
        this.rowSearchBtn = Selector('tbody[role="rowgroup"]');
        this.arrowRightBtn = Selector('[data-cy=collapse-button]');
        this.clearSearch = Selector('[aria-label="Clear"]');
        this.filterBtn = Selector('button').withText('Filter');
        this.cancelBtn = Selector('[data-cy=cancel-button]');
        this.makeCallBtn = Selector('[data-cy=make-a-call]');
        this.phoneNrEntry = Selector('[data-cy=dialer-display]');
        this.callBtn = Selector('[data-cy=call]');
        this.muteBtn = Selector('div:nth-child(2) > scorpion-dialer-button > div > button');
        this.holdBtn = Selector('div:nth-child(1) > scorpion-dialer-button > div > button');
        this.dialBtn = Selector('div:nth-child(5) > scorpion-dialer-button > div > button')
        this.endCallBtn = Selector('[data-cy=end-call]');
        this.miniBtn = Selector('[data-cy=minimize-dialer]');
        this.maxiBtn = Selector('[data-cy=maximize-dialer]');
        this.dialZero = Selector('[data-cy=dial-input-button0]');
        this.dialOne = Selector('[data-cy=dial-input-button1]');
        this.dialTwo = Selector('[data-cy=dial-input-button2]');
        this.dialThree = Selector('[data-cy=dial-input-button3]');
        this.dialFour = Selector('[data-cy=dial-input-button4]');
        this.dialFive = Selector('[data-cy=dial-input-button5]');
        this.dialSix = Selector('[data-cy=dial-input-button6]');
        this.dialSeven = Selector('[data-cy=dial-input-button7]');
        this.dialEight = Selector('[data-cy=dial-input-button8]');
        this.dialNine = Selector('[data-cy=dial-input-button9]');
        this.endCalMin = Selector('button.mod-red');
        this.dragBtn = Selector('[aria-label="double_ellipsis"]');
        this.collapseBtn = Selector('[aria-label="Dialpad"]');
        this.sidePanelBtn = Selector('div[title="Call List"]');
        this.backMainDialPadBtn = Selector('div[title="Back"]');
        this.addressBookBtn = Selector('div[title="Address Book"]');
        this.addressBookSearch = Selector('input[data-cy=search-input]');
        this.mehrScorpion = Selector('div').withText('Mehrdad Tetetesting')
        this.participants = Selector('span').withText('Participants');
        this.availabilityBtn = Selector('[aria-label="Set Your Availability"]');
        this.avaiToggleBtn = Selector('div[data-cy=component]');
     }
}
export default new PhonePage();