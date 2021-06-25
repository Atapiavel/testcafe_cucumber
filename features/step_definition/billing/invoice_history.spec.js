const { When, Then } = require('@cucumber/cucumber');
const ActionsPage = require('../../../pages/actions.pages.js')
const BillingHistoryPage = require('../../../pages/billing/invoice_history.pages.js');
const BillingHistoryPageLocator = require('../../../locators/billing/invoice_history.locators.js');
var assert = require('assert');
const url = "https://integration.scorpion.co/csx/billing/graphql"
const bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiOEE4MDg5RUM0OUEyOTk0MkJFQUM0RjIxODMwQUNDMzIiLCJleHAiOjE2MjQ1NjU2NDMsIm5iZiI6IjE2MjQ1NjIwNDMiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.UDdC3aGy4_pjcbFKEH0PAMP7BMVXfG2NzIvL70OuLd1Sn68OdfBPq6eDJTSwGxC5J1ooLeG2vTpnKrIZ_JfoQA903cFyHGUt1_IpiSGR0fAAoR6FpMne6cwaAGOjctUQ6xeP4nISUueKuUNgx8HBGb5y9PcUPfUXo_WY0EG1yYtbqtv4k991vZXy6I9p4cW8l1Zntx03wdYbjLpswR4hOduEIUa40XtoIYvycWay0AJ830U74rTGpKSGuZblL6DMONfzaZGPET1c874hhNHXtxFSiXjiSYKIW4oXvEZKrQhRC3Y7BIjANb2PiWQzqOmL8_8lff2kEqzXxHVij9-GiP53mewev8EIhzEHIPF35vSqPvPczvDBkCLpUCu8NWIniqN5Mi74j-F3etF6ZhICA2pv5iK365Ay6leioJWpfnvUJbi_8eyld9kdEahUh1wSbGbrusFTdbi2O1vSwvOifvbiaiSK0eZOMufx62bJhj0843TVKj19hCqEcdtbzS9kNeZTN7ZdHUcRCcg6fN0ImdXmcIb6bAprNb-fAaZP9ywtNBaBWxOJJYV0uwBECZaOWBX8djfU4HqnsiTWlwFqRjIni9-mxYLNZOnYknYW5HT605UJGdXI08mPwRl_AVbOZe7xQ58oih-51YQ-euG-r7a_50g5XAqMG38cf93xCK4"
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": "Bearer " + bearer,
}


When('I assert the Scorpion Billing History page', async function () {
    const text = await ActionsPage.select(BillingHistoryPageLocator.page_title()).innerText;
    assert(text == "Billing History")
})

When('I assert I can see historical invoices', async function () {
    await BillingHistoryPage.assert_historical_invoices(url, headers)
})

When('I verify the columns are showed with', async function (datatable) {
    await BillingHistoryPage.assert_columns(datatable)
})

Then('I assert {string} kebab option is visible for', async function (option, datatable) {
    await BillingHistoryPage.assert_kebab_option(option, datatable)
})

When('I select the filter {string} with {string}', async function (filter, value) {
    await BillingHistoryPage.filter_invoices(filter, value)
})

Then('I assert no invoices are shown', async function () {
    const text = await ActionsPage.select(BillingHistoryPageLocator.no_results()).innerText;
    assert(text == "Sorry, we couldn´t find any matches.")
})

When('I click on apply button', async function () {
    await ActionsPage.click_element_from_list(BillingHistoryPageLocator.apply_button(), "Apply")
})

Then('I assert the results count showing {string}', async function (results) {
    const text = await ActionsPage.select(BillingHistoryPageLocator.results_count()).innerText;
    assert(text == results)
}) 

Then('I click on clear all filters button', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.clear_all_filters())
})

Then('I click on filter button', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.filter_button())
})

Then('I click on cancel button', async function () {
    await ActionsPage.click_element_from_list(BillingHistoryPageLocator.apply_button(), "Cancel")
})

Then('I click on clear all filters link', async function () {
    await ActionsPage.click_element(BillingHistoryPageLocator.clear_all_filters())
}) 