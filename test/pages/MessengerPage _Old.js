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
        this.addGroupsBtn = Selector('section:nth-child(2) > header > scorpion-icon');
        this.addCoworkersBtn = Selector('section:nth-child(3) > header > scorpion-icon');
        this.groupNameInput = Selector('[data-cy=input-wrapper]').withText('Name Your Group');
        this.searchTeamMembers = Selector('[data-cy=member-search]');
        this.selectMemberRadio = Selector('[aria-label="check"]');
        this.createBtn = Selector('button').withText('Create');
        this.kebobBtn = Selector('[data-cy=popup-menu-button]');
        this.deleteGroupBtn = Selector('span').withText('Delete Group');
        this.yesBtn = Selector('button').withText('Yes');
        this.coworkerSearchInput = Selector('[data-cy=search-input]');
        this.continueBtn = Selector('div').withText('Continue');
        this.hideBtn = Selector('scorpion-menu-item > span');



    }
}
export default new MessengerPage();
