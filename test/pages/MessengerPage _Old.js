import {Selector,t} from 'testcafe';

class MessengerPage{
    constructor(){
        this.subtitleHeader = Selector('strong')
        .withText('Messenger');
        this.messengerBtn = Selector('[data-cy=dock-app-tile-comms-messenger]')
        this.msgSearchBtn = Selector('[data-cy=search-button]');
        this.peopleBtn = Selector('[title="comms-messenger.enum.people-tooltip"]');
        this.groupsBtn = Selector('[title="comms-messenger.enum.groups-tooltip"]');
        this.messagesBtn = Selector('[title="comms-messenger.enum.messages-tooltip"]');

    }
}
export default new MessengerPage();