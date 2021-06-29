const Requests = require("./requests");
const fetch = require("node-fetch");
// const bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiOEE4MDg5RUM0OUEyOTk0MkJFQUM0RjIxODMwQUNDMzIiLCJleHAiOjE2MjQ1NjU2NDMsIm5iZiI6IjE2MjQ1NjIwNDMiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.UDdC3aGy4_pjcbFKEH0PAMP7BMVXfG2NzIvL70OuLd1Sn68OdfBPq6eDJTSwGxC5J1ooLeG2vTpnKrIZ_JfoQA903cFyHGUt1_IpiSGR0fAAoR6FpMne6cwaAGOjctUQ6xeP4nISUueKuUNgx8HBGb5y9PcUPfUXo_WY0EG1yYtbqtv4k991vZXy6I9p4cW8l1Zntx03wdYbjLpswR4hOduEIUa40XtoIYvycWay0AJ830U74rTGpKSGuZblL6DMONfzaZGPET1c874hhNHXtxFSiXjiSYKIW4oXvEZKrQhRC3Y7BIjANb2PiWQzqOmL8_8lff2kEqzXxHVij9-GiP53mewev8EIhzEHIPF35vSqPvPczvDBkCLpUCu8NWIniqN5Mi74j-F3etF6ZhICA2pv5iK365Ay6leioJWpfnvUJbi_8eyld9kdEahUh1wSbGbrusFTdbi2O1vSwvOifvbiaiSK0eZOMufx62bJhj0843TVKj19hCqEcdtbzS9kNeZTN7ZdHUcRCcg6fN0ImdXmcIb6bAprNb-fAaZP9ywtNBaBWxOJJYV0uwBECZaOWBX8djfU4HqnsiTWlwFqRjIni9-mxYLNZOnYknYW5HT605UJGdXI08mPwRl_AVbOZe7xQ58oih-51YQ-euG-r7a_50g5XAqMG38cf93xCK4"
var url = "https://integration.scorpion.co/csx/billing/graphql"
const fs = require('fs');

var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var start_of_month = new Date(year, month, 1)
var end_of_month = new Date(year, month + 1, 0);
var current_unpaid_amount = 0
var amount_due = 0
var past_amount_due = 0
var amount_paid = 0
var current_amount = 0

function getAmountDue(url, headers) {
        fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                        query: Requests.getInvoiceList(100),
                })
        })
                .then(r => r.json())
                .then(data => {
                        var i = data.data.getInvoiceList.items.length
                        for (var n = 0; n < i; n++) {
                                // console.log(data.data.getInvoiceList.items[n].invoiceNumber + ":" + data.data.getInvoiceList.items[n].amountDue + ":" + data.data.getInvoiceList.items[n].amountPaid)
                                var amount = data.data.getInvoiceList.items[n].amountDue
                                var amount_paid_aux = data.data.getInvoiceList.items[n].amountPaid
                                var due_date = new Date(data.data.getInvoiceList.items[n].dueDate)
                                if (due_date <= end_of_month) {
                                        amount_due = amount_due + amount
                                }
                                if (due_date < start_of_month) {
                                        past_amount_due = past_amount_due + amount
                                }
                                if (due_date >= start_of_month && due_date <= end_of_month) {
                                        current_unpaid_amount = current_unpaid_amount + amount
                                        current_amount = current_amount + amount_paid_aux + amount
                                }
                                amount_paid = amount_paid + amount_paid_aux
                        }
                        console.log("amountDue: " + amount_due)
                        console.log("pastAmountDue: " + past_amount_due)
                        // console.log("amountPaid: " + amount_paid)
                        console.log("estimate: " + current_amount)
                        // console.log("unpaidEstimate: " + current_unpaid_amount)
                });

}

function getAccountMonies(url, headers, serviceLineId) {
        fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                        query: Requests.getAccountMonies(serviceLineId),
                })
        })
                .then(r => r.json())
                .then(data => {
                        var availableCredit = data.data.getAccountMonies[0].amount
                        console.log("availableCredit: " + availableCredit)
                });

}

function fetchAuthToken(password, username) {
        const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }
        const loginUrl = "https://integration.scorpion.co/platform/identity/v1/api/oauth2/login2";
        const authorizeUrl = "https://integration.scorpion.co/platform/identity/v1/api/oauth2/ropc/authorize";
        const loginBody = {
                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                password,
                username,
        };
        fetch(loginUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(loginBody)
        })
                .then(r => r.json())
                .then(data => {
                        const authorizeBody = {
                                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                                code: data.result,
                        };
                        fetch(authorizeUrl, {
                                method: 'POST',
                                headers: headers,
                                body: JSON.stringify(authorizeBody)
                        })
                                .then(r => r.json())
                                .then(data => {
                                        var token = String(data.id_token)
                                        fs.appendFileSync("./bearer.txt", token, "UTF-8", { 'flags': 'a+' });
                                }
                                )

                });

}

// fetchAuthToken("Billing1234!!", "thebillingteam@scorpion.co")
// console.log(read_bearer())
// console.log(is_authorized())
// getInvoiceHistoryData(url, headers)
// getAmountDue(url, headers)
// getAccountMonies(url, headers, 1)
// execute_request(url, bearer, Requests.getAccountMonies(0))
// execute_request(url, bearer, Requests.getInvoiceList(100))
// execute_request(url, bearer, Requests.getBillingLocationByClient())
// execute_request(url, bearer, Requests.getInvoice("25a35fda-25c7-f2b3-e44c-66f6901a50d5"))
// execute_request(url, bearer, Requests.getPaymentMethods())
// execute_request(url, bearer, Requests.getPlatformLocations())
// execute_request(url, bearer, Requests.getPlatformUsers())
// execute_request(url, bearer, Requests.getScorpionAddress(1))
// execute_request(url, bearer, Requests.getScorpionAddress(2))

module.exports = {
        fetchAuthToken: fetchAuthToken
}