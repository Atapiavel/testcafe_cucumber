const { Selector } = require('testcafe');
var shell = require('shelljs');
const fs = require('fs')

async function navigate(url) {
    await testController.navigateTo(url);
}

async function click_element(element) {
    await testController.click(element);
}

async function take_screenshot() {
    await testController.takeScreenshot()
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
    await testController.typeText(element, value)
}

// async function type_and_enter(element, value) {
//     cy.get(element).type(String(value)).type("{enter}")
// }

async function click_element_from_list(element, value) {
    const option = Selector(element).withText(value)
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

async function drag(element,x,y) {
    var value_1 = parseInt(x,10);
    var value_2 = parseInt(y,10);
    await testController.drag(element,value_1,value_2,{offsetX: 10, offsetY: 10})

function execute_shell(command) {
    shell.exec(command)
}

function get_actual_date() {
    const act_date = new Date();
    return act_date
}

function write_date() {
    let data = String(this.get_actual_date())
    fs.appendFileSync("date.txt", data + '_', "UTF-8", { 'flags': 'a+' });
}

function read_start_date() {
    var str = fs.readFileSync('./date.txt', 'utf8');
    var dates = str.split('_')
    var start_date_raw = dates[0]
    var start_date = start_date_raw.split('(')
    return start_date[0]
}

function read_end_date() {
    var str = fs.readFileSync('./date.txt', 'utf8');
    var dates = str.split('_')
    var end_date_raw = dates[1]
    var end_date = end_date_raw.split('(')
    return end_date[0]

async function drag(element,x,y) {
    var value_1 = parseInt(x,10);
    var value_2 = parseInt(y,10);
    await testController.drag(element,value_1,value_2,{offsetX: 10, offsetY: 10})
}

module.exports = {
    navigate: navigate,
    click_element: click_element,
    take_screenshot: take_screenshot,
    execute_shell: execute_shell,
    // click_element_xpath: click_element_xpath,
    // click_element_force: click_element_force,
    // hit_enter_key: hit_enter_key,
    type_text: type_text,
    // type_and_enter: type_and_enter,
    click_element_from_list: click_element_from_list,
    // hover_element: hover_element,
    // hover_element_from_list: hover_element_from_list,
    // scroll_to_element: scroll_to_element,
    wait: wait,
    drag: drag,
    get_actual_date: get_actual_date,
    write_date: write_date,
    read_start_date: read_start_date,
    read_end_date: read_end_date,
    
};
