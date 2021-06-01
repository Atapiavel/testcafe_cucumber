import {Selector,t} from 'testcafe';

class MessengerPage{
    constructor(){
        this.subtitleHeader = Selector('strong')
        .withText('Messenger');
        this.messengerBtn = Selector('[data-cy=dock-app-tile-comms-messenger]');
        this.messengerBtn = Selector('[data-cy=dock-app-tile-comms-messenger]');
        this.msgSearchBtn = Selector('scorpion-button[title="Search"]');
        this.peopleBtn = Selector('scorpion-tile-select-item:nth-of-type(1)');
        this.groupsBtn = Selector('scorpion-tile-select-item:nth-of-type(2)');
        this.messagesBtn = Selector('scorpion-tile-select-item:nth-of-type(3)');
        this.addGroupsBtn = Selector('section:nth-child(2) > header > scorpion-dropdown > div > scorpion-link > button > span');
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
        this.aaronBtn = Selector('scorpion-ui-card').withText('Aaron McFly');
        this.paperClipBtn = Selector('scorpion-button-icon[icon="paperclip"]');
        // this.fileUpload = Selector('[class="upload-action"]');
        this.uploadSendBtn = Selector('button').withText('Send');
        this.clickAddMoreBtn = Selector('button').withText('click');
        





    }
}
export default new MessengerPage();
