const { Selector, test, t } = require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

async function assert_text(element, value) {
    // const text = await Selector(element);
    // await testController.expect(text).eql(value);
        // const text = Selector(element);
        // await testController.expect(text.).eql(value, 'Match')                                                                  
    // cy.get(element).should('have.text', value)
}

async function assert_contains(element, value) {
    await testController.expect(element.innerText).contains(value, 'string contains the expected substring')
}

async function assert_exists(element) {
    await testController.expect(select(element).visible).ok();
}

module.exports = {
    assert_text: assert_text,
    assert_contains: assert_contains,
    assert_exists: assert_exists,
};
