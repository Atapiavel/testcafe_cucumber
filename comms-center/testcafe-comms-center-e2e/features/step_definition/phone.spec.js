const { When, Then } = require('@cucumber/cucumber');
const PhonePageLocator = require('../../locators/phone.locators');

const URL = 'https://ui-integration.scorpion.co/phone';

When('I land on Phone page', async function () {
        await testController.expect(phonepage.PhonePage.exists).ok;
  })

When('I click on Search button from phone page', async function() {
        // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;        
        await ActionsPage.click_element(PhonePageLocator.SearchBtn());
  });

When('I click on Make a Call button', async function() {
        await ActionsPage.click_element(PhonePageLocator.MakeCallBtn());
  });

When('I enter numbers in Phone Number entry {string}', async function(phoneNr){
        await ActionsPage.type_text(PhonePageLocator.PhoneNrEntry(), phoneNr);
  });

When('I click on Call button', async function (){
        await ActionsPage.click_element(PhonePageLocator.CallBtn());
  });

Then('I click on End Call button', async function (){
        await ActionsPage.click_element(PhonePageLocator.EndCallBtn());
});

When('I click on Make a Call button again', async function(){
        await ActionsPage.click_element(PhonePageLocator.MakeCallBtn());
});

When('I click on Number Four button', async function(){
        await ActionsPage.click_element(PhonePageLocator.FourBtn());
});

When('I click on Number One button', async function(){
        await ActionsPage.click_element(PhonePageLocator.OneBtn());
});

When('I click on Number Five button', async function(){
        await ActionsPage.click_element(PhonePageLocator.FiveBtn());

});

When('I click on Number Nine button', async function(){
        await ActionsPage.click_element(PhonePageLocator.NineBtn());
});

When('I click on Number Two button', async function(){
        await ActionsPage.click_element(PhonePageLocator.TwoBtn());
});

When('I click on Number Seven button', async function(){
        await ActionsPage.click_element(PhonePageLocator.SevenBtn());
});

When('I click on Number Six button', async function(){
        await ActionsPage.click_element(PhonePageLocator.SixBtn());
});

When('I click on Number Three button', async function(){
        await ActionsPage.click_element(PhonePageLocator.ThreeBtn());
});

When('I click on Number Eight button', async function(){
        await ActionsPage.click_element(PhonePageLocator.EightBtn());
});

When('I click on Number Zero button', async function(){
        await ActionsPage.click_element(PhonePageLocator.ZeroBtn());
});

When('I click on Call button again', async function (){
        await ActionsPage.click_element(PhonePageLocator.CallBtn());
  });

Then('I click on End Call button again', async function(){
        await ActionsPage.click_element(PhonePageLocator.EndCallBtn());
});
