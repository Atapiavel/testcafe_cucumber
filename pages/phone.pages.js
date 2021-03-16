const ActionsPage = require("./actions.pages");

async function dial_number(number) {
    number_list = number.split("")
    for (var i = 0; i < number_list.length; i++) {
        ActionsPage.click_element('[data-cy=dial-input-button' + number_list[i] +']')
    }
}

module.exports.dial_number = dial_number;