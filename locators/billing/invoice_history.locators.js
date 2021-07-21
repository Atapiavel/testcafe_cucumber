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

function filter_buttons() {
    return ".ng-star-inserted > button"
}

function months_buttons(){
    return "div.month-grid > button > span.label"
}

function no_results() {
    return "scorpion-no-results > div > div > div > strong"
}

function apply_button() {
    return "scorpion-button > button"
}

function min_price() {
    return "scorpion-input:nth-of-type(1)"
}

function max_price() {
    return "scorpion-input:nth-of-type(2)"
}

function results_count() {
    return "[data-cy=results-count]"
}

function paid_checkbox() {
    return "li:nth-of-type(1) > scorpion-checkbox  button"
}

function unpaid_checkbox() {
    return "li:nth-of-type(2) > scorpion-checkbox  button"
}

function partially_paid_checkbox() {
    return "li:nth-of-type(3) > scorpion-checkbox  button"
}

function clear_all_filters() {
    return "[data-cy=text]"
}


module.exports = {
    page_title: page_title,
    filter_button: filter_button,
    start_date: start_date,
    end_date: end_date,
    edit: edit,
    clear_filters: clear_filters,
    selected_records: selected_records,
    actions_dropdown: actions_dropdown,
    no_results: no_results,
    apply_button: apply_button,
    filter_buttons: filter_buttons,
    min_price: min_price,
    max_price: max_price,
    results_count: results_count,
    paid_checkbox: paid_checkbox,
    unpaid_checkbox: unpaid_checkbox,
    partially_paid_checkbox: partially_paid_checkbox,
    clear_all_filters: clear_all_filters,
    months_buttons: months_buttons
}
