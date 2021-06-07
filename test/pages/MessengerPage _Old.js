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
        this.filesBtn = Selector('scorpion-tile-select-item:nth-of-type(4)');
        this.addGroupsBtn = Selector('section:nth-child(2) > header > scorpion-dropdown > div > scorpion-link > button > span');
        this.addPeopleBtn = Selector('section:nth-child(3) > header > scorpion-dropdown > div > scorpion-link > button > span');
        this.groupNameInput = Selector('[data-cy=input-wrapper]').withText('Name Your Group');
        this.searchTeamMembers = Selector('[data-cy=member-search]');
        this.memberCheckboxBtn = Selector('[class="checkbox-button"]');
        this.createBtn = Selector('[data-cy="create-button"]');
        this.groupsKebobBtn = Selector('section:nth-child(2) [aria-label="ellipsis"]');
        this.deleteGroupBtn = Selector('span').withText('Delete Group');
        this.yesBtn = Selector('button').withText('Yes');
        this.peopleSearchInput = Selector('[type="search"]');
        this.peopleRadioBtn = Selector('[data-cy=shared-radio-circle-container]')
        this.startBtn = Selector('button').withText('Start');
        this.shawnKebobBtn = Selector('section:nth-child(3) > div > div:nth-child(2) [aria-label="ellipsis"]');
        this.hideBtn = Selector('scorpion-menu-item > span');
        this.aaronBtn = Selector('scorpion-ui-card').withText('Aaron McFly');
        this.messageField = Selector('body[contenteditable=true]');
        this.sendMessageBtn = Selector('[class="send-message"]');
        this.paperClipBtn = Selector('scorpion-button-icon[icon="paperclip"]');
        // this.fileUpload = Selector('[class="upload-action"]');
        this.uploadSendBtn = Selector('button').withText('Send');
        this.cancelModalBtn = Selector('button').withText('Cancel')
        this.clickAddMoreBtn = Selector('button').withText('click');
        





    }
}
export default new MessengerPage();
