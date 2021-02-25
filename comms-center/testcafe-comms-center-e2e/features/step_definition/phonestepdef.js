const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const phonepage = require('../../pages/PhonePage');
const { waitForDebugger } = require('inspector');
const { PhonePage } = require('../../pages/PhonePage');
const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

const URL = 'https://ui-integration.scorpion.co/phone';

Given('I open the welcome page', async function () {
        await testController.navigateTo(URL);
    
  });

When('I enter Email {string}', async function (email) {
        await testController.typeText(phonepage.PhonePage.Email(), email);
    
  });

When('I enter Password {string}', async function (password) {
        await testController.typeText(phonepage.PhonePage.Password(), password);
    
  });

When('I click Sign In button', async function () {
        await testController.click(phonepage.PhonePage.SignIn());

  });

When('I land on Phone page', async function () {
        await testController.expect(phonepage.PhonePage.exists).ok;
  })

When('I click on Search button from phone page', async function() {
        // await testController.expect(phonepage.PhonePage.SearchBtn().exists).ok;        
        await testController.click(phonepage.PhonePage.SearchBtn());
  });

When('I click on Make a Call button', async function() {
        await testController.click(phonepage.PhonePage.MakeCallBtn());
  });

When('I enter numbers in Phone Number entry {string}', async function(phoneNr){
        await testController.typeText(phonepage.PhonePage.PhoneNrEntry(), phoneNr);
  });

When('I click on Call button', async function (){
        await testController.click(phonepage.PhonePage.CallBtn());

  });

Then('I click on End Call button', async function (){
        await testController.click(phonepage.PhonePage.EndCallBtn());

});

When('I click on Make a Call button again', async function(){
        await testController.click(phonepage.PhonePage.MakeCallBtn());
});

When('I click on Number Four button', async function(){
        await testController.click(phonepage.PhonePage.FourBtn());
});

When('I click on Number One button', async function(){
        await testController.click(phonepage.PhonePage.OneBtn());
});

When('I click on Number Five button', async function(){
        await testController.click(phonepage.PhonePage.FiveBtn());

});

When('I click on Number Nine button', async function(){
        await testController.click(phonepage.PhonePage.NineBtn());
});

When('I click on Number Two button', async function(){
        await testController.click(phonepage.PhonePage.TwoBtn());
});

When('I click on Number Seven button', async function(){
        await testController.click(phonepage.PhonePage.SevenBtn());
});

When('I click on Number Six button', async function(){
        await testController.click(phonepage.PhonePage.SixBtn());
});

When('I click on Number Three button', async function(){
        await testController.click(phonepage.PhonePage.ThreeBtn());
});

When('I click on Number Eight button', async function(){
        await testController.click(phonepage.PhonePage.EightBtn());
});

When('I click on Number Zero button', async function(){
        await testController.click(phonepage.PhonePage.ZeroBtn());
});

When('I click on Call button again', async function (){
        await testController.click(phonepage.PhonePage.CallBtn());

  });

Then('I click on End Call button again', async function(){
        await testController.click(phonepage.PhonePage.EndCallBtn());
});
