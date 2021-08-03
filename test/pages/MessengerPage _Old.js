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
        this.autotestgrpBtn = Selector('scorpion-ui-card').withText('Auto Test Group1');
        this.groupsKebobBtn = Selector('section:nth-child(2) > div > scorpion-conversation-card:nth-child(4) [aria-label="ellipsis"]');
        // this.groupsKebobBtn = Selector('scorpion-icon').withText('Auto Test Group1');
        this.deleteGroupBtn = Selector('span').withText('Delete Group');
        this.yesBtn = Selector('button').withText('Yes');
        this.peopleSearchInput = Selector('[type="search"]');
        this.peopleRadioBtn = Selector('[data-cy=shared-radio-circle-container]')
        this.startBtn = Selector('button').withText('Start');
        this.shawnKebobBtn = Selector('section:nth-child(3) > div > scorpion-conversation-card:nth-child(1) [aria-label="ellipsis"]');
        this.hideBtn = Selector('scorpion-menu-item > span');
        this.groupsSortBtn = Selector('section:nth-child(2) scorpion-icon[icon="dropdown"]');        
        this.peopleSortBtn = Selector('section:nth-child(3) scorpion-icon[icon="dropdown"]');
        this.alphaSort = Selector('div[ngprojectas="scorpion-menu-item"]').withText('Alphabetically');
        this.dateCreatSort = Selector('div[ngprojectas="scorpion-menu-item"]').withText('Date Created');
        this.mostRecentSort = Selector('div[ngprojectas="scorpion-menu-item"]').withText('Most Recent');
        this.aaronBtn = Selector('scorpion-ui-card').withText('Aaron McFly');
        this.messageField = Selector('body[contenteditable=true]');
        this.sendMessageBtn = Selector('[class="send-message"]');
        this.emojiBtn = Selector('scorpion-message-input > div > div > div.nlf-middle-between.auto > div > scorpion-emoji-select > div > scorpion-button-icon > button > scorpion-icon > div > svg');
        this.maskEmoji = Selector('[title="mask"]');
        this.paperClipBtn = Selector('scorpion-button-icon[icon="paperclip"]');
        // this.fileUpload = Selector('[class="upload-action"]');
        this.uploadSendBtn = Selector('button').withText('Send');
        this.cancelModalBtn = Selector('button').withText('Cancel')
        this.clickAddMoreBtn = Selector('button').withText('click');
        





    }
}
export default new MessengerPage();
