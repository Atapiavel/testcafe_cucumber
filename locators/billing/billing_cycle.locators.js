const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController })
}

function billing_cycle_title() {
    return select('[data-cy=header]').withText('Monthly Billing Cycle')
}

function date_range() {
    return "[data-cy=date-range]"
}

function estimate_value() {
    return "[data-cy=value]"
}

function estimate_text() {
    return "[data-cy=stat-name]"
}

function bar_desc_1() {
    return "li:nth-child(1) > scorpion-chart-legend-entry > div > div > span.legend-label-name"
}

function bar_desc_2() {
    return "li:nth-child(2) > scorpion-chart-legend-entry > div > div > span.legend-label-name"
}

function bar_desc_3() {
    return "li:nth-child(3) > scorpion-chart-legend-entry > div > div > span.legend-label-name"
}

function total_balance_due_value() {
    return "#billing-cycle-totalBalanceDue"
}

function credit_available_value() {
    return "#billing-cycle-creditAvailable"
}

 module.exports = {
    billing_cycle_title: billing_cycle_title,
    date_range: date_range,
    estimate_value: estimate_value,
    estimate_text: estimate_text,
    bar_desc_1: bar_desc_1,
    bar_desc_2: bar_desc_2,
    bar_desc_3: bar_desc_3,
    total_balance_due_value: total_balance_due_value,
    credit_available_value: credit_available_value
 }