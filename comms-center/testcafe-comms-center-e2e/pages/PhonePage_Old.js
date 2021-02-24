import {Selector,t} from 'testcafe';

class PhonePage{
    constructor(){
        this.subtitleHeader = Selector('strong')
        .withText('Phone');
        this.phoneBtn = Selector('[data-cy=dock-app-tile-comms-phone]');
        this.searchBtn = Selector('[data-cy=button-search]');
        this.makeCallBtn = Selector('[data-cy=make-a-call]');
        this.phoneNrEntry = Selector('[data-cy=input-wrapper]');
        this.callBtn = Selector('[data-cy=call]');
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
    }
}
export default new PhonePage();