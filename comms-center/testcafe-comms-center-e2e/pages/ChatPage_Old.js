import {Selector,t} from 'testcafe';

class ChatPage{
    constructor(){
        this.subtitleHeader = Selector('[data-cy=header]');
        this.chatButton = Selector('[data-cy=dock-app-tile-comms-chat]');
        this.getStartedButton = Selector('[data-cy=get-started]');
        this.allTab = Selector('[data-name="All"]');
        this.mineTab = Selector('[data-name="Mine"]');
    }
}
export default new ChatPage();