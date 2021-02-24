const { Selector, test, t } = require('testcafe');

async function assert_text(element, value) {
    // const text = await Selector(element);
    // await testController.expect(text).eql(value);
        const text = await Selector(element);
        await testController.expect(text.value).eql(value, 'Match')                                                                  
    // cy.get(element).should('have.text', value)
}

async function assert_contains(element, value) {
    await testController.expect(element.innerText).contains(value, 'string contains the expected substring')
    // cy.get(element).contains(value)
}

async function assert_is_visible(element) {
    await testController.expect(element.visible).ok();
    // cy.get(element).should('be.visible')
}

module.exports = {
    assert_text: assert_text,
    assert_contains: assert_contains,
    assert_is_visible: assert_is_visible,
};
