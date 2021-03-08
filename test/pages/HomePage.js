import {Selector, t} from 'testcafe';

class HomePage{
    constructor(){
        this.subtitleHeader = Selector('strong')
        .withText('Your Business Growth')
    }
}
export default new HomePage();        