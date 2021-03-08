const { Selector, test, t } = require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

async function assert_text(element, value) {
    text = Selector(element).withText(value);
    await testController.expect(text.innerText).eql(value, 'Match') 
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
