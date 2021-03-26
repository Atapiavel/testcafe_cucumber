const { Selector, test, t } = require('testcafe');
var assert = require('assert');

async function assert_text(element, value) {
    const text = await select(element).innerText;
    // var text = document.getElementBySelector(element).innerHTML
    console.log(text)
    console.log(value)
    assert(element.text == value, 'Match')
}

async function assert_contains(element, value) {
    const text = Selector(element)
    await testController.expect(text).contains(value, 'String contains the expected substring')
}

async function assert_exists(element) {
    await testController.expect(element.exists).ok;
}

module.exports = {
    assert_text: assert_text,
    assert_contains: assert_contains,
    assert_exists: assert_exists,
};
