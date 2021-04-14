function page_title() {
    return ".page-title"
}

function filter_button() {
    return "[data-cy=trigger-button]"
}

function start_date() {
    return "div > scorpion-mega-date-range-picker > div > div > label:nth-child(1) > div.nlf-middle > div > input"
}

function end_date() {
    return "div > scorpion-mega-date-range-picker > div > div > label:nth-child(2) > div.nlf-middle > div > input"
}

function edit() {
    return ".edit svg"
}

function clear_filters() {
    return "div > scorpion-link > button > span"
}

function selected_records() {
    return "div.fit.ng-star-inserted > span"
}

function actions_dropdown() {
    return "scorpion-button[icon='dropdown']"
}

module.exports = {
    page_title: page_title,
    filter_button: filter_button,
    start_date: start_date,
    end_date: end_date,
    edit: edit,
    clear_filters: clear_filters,
    selected_records: selected_records,
    actions_dropdown: actions_dropdown
}