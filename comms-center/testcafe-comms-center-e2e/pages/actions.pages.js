const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');

async function navigate(url) {
    await testController.navigateTo(url);
}

async function click_element(element) {
    await testController.click(element)
}

// async function click_element_xpath(element) {
//     cy.xpath(element).first().click()
// }

// async function click_element_force(element) {
//     cy.get(element).click({ force: true })
// }

// async function hit_enter_key(element) {
//     cy.get(element).type("{enter}")
// }

async function type_text(element, value) {
    await testController.typeText(element, value);
}

// async function type_and_enter(element, value) {
//     cy.get(element).type(String(value)).type("{enter}")
// }

async function click_element_from_list(element, value) {
    const option = Selector(element).withText(value);
    await testController.click(option)
}

// async function hover_element(element) {
//     cy.get(element).trigger('mouseover')
// }

// async function hover_element_from_list(element, value) {
//     cy.get(element).each(($el) => {
//         if ($el.text().includes(value)) {
//             this.hover_element($el)
//         }
//     })
// }

// async function scroll_to_element(element, value) {
//     cy.get(element).each(($el) => {
//         if ($el.text().includes(value)) {
//             element.scrollIntoView();
//         }
//     })
// }

async function wait(seconds) {
    var time = parseInt(seconds, 10);
    await testController.wait(time * 1000)
}

module.exports = {
    navigate: navigate,
    click_element: click_element,
    // click_element_xpath: click_element_xpath,
    // click_element_force: click_element_force,
    // hit_enter_key: hit_enter_key,
    type_text: type_text,
    // type_and_enter: type_and_enter,
    click_element_from_list: click_element_from_list,
    // hover_element: hover_element,
    // hover_element_from_list: hover_element_from_list,
    // scroll_to_element: scroll_to_element,
    wait: wait
};
