const Requests = require("./requests");
const fetch = require("node-fetch");
const fs = require('fs');

var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiNzA5NDY2Q0U2NDQ1QkE0OUFBNTMzRUE3REVEOTIxOTgiLCJleHAiOjE2MjUyNzQ3MzQsIm5iZiI6IjE2MjUyNzExMzQiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiNGJkYTJhZTItMDM1Ny00Y2JmLWI1NTAtNmJhMDY2NWMzNWE1IiwidXNlcklkIjoxNDU4MCwidXNlckd1aWQiOiJmYzM5MWVkMC04ZmU1LWE1YmYtOTlhMy05NTE1MGFmMjhmM2IiLCJuYW1lIjoiQmlsbGluZyBUZWFtIiwiZW1haWwiOiJ0aGViaWxsaW5ndGVhbUBzY29ycGlvbi5jbyIsImFjY291bnQiOiJiOTZiZTlkMC02Y2FiLTk5NDYtYTQ1OC0yYTUxZWU5MTk5NDgiLCJzY29ycGlvblVzZXIiOmZhbHNlLCJsb2NhbFVzZXIiOnRydWUsImltcGVyc29uYXRlZCI6ZmFsc2UsIm11bHRpVGVuYW50IjpmYWxzZSwiY2xpZW50SWQiOjQxOTcsImNsaWVudEd1aWQiOiJiOTZiZTlkMC02Y2FiLTk5NDYtYTQ1OC0yYTUxZWU5MTk5NDgiLCJvcmlnaW5hbENsaWVudElkIjo0MTk3LCJvcmlnaW5hbENsaWVudEd1aWQiOiJiOTZiZTlkMC02Y2FiLTk5NDYtYTQ1OC0yYTUxZWU5MTk5NDgiLCJzeXN0ZW1Sb2xlcyI6IjAiLCJhY2NvdW50Um9sZXMiOiIwIiwicGVybWlzc2lvbnMiOiJbMjQzMTg4NDYsMjYyMTQ0LDEsODIxMTg5OTIwLDE2NzgxMTkyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0iLCJhcGlrZXkiOmZhbHNlLCJlbmFibGVBcGlMb2ciOmZhbHNlLCJoaXBhYSI6ZmFsc2UsImlzcyI6ImlkZW50aXR5LnNjb3JwaW9uLmNvIiwiYXVkIjoidXNlcnMifQ.E2HFXPmipmdYp-7BksurcqIMlb3IRkOz7fUYq9d6M5Nyv0aQxjBqau0QP0ufrhutKQFbUNNCa1xHWN0FBWuGIz-fdW8bKkTvY0QVyEyb1N_fy1qbfKpr-0MNKVK3Ofb9NkN76kONQ8yl9Cz0vVrtmqekET9s54jV6jQgIX4Dh7giK_cNW9GctSN5jhPYdLsF8UK31p_WxIp1c5koDFFCTKgKwFxqmCW7NxbivzyFpv-crJxQ0DEt0Y9OmSbuTgF-0hQUx2FtvkhjV1Nf4IHe6F09a5sbB96GvtVZCO-PSZqVTdO4rWF0OB32V_NhhTbqHxsptFZu9uYBz081JgZSrlEeM9K-k3M1ajT3SWqDmeBqwXWltQAKEhlkSfGD77PUqeVbK0yeCUgSeqxEYCwglwR1VW7rRCX8zI4mYC88PwIHhyAIy5vbxUY9hbGTpksZKHU0XlfTjhsseuRvdZv4A3M8KF_d6bsrBY10YrkBGtAKtUOTYKcElJ-K4HuBq2rJeEtipOmyjMFxhgwLwu4iXUx-Xj1eYsbG_UhGiAJS8yzLjQhvYKARhhEXbd3HEfD8VfSFCldJwUSvDXqTs-sGOqYOnH4VfbeyNfpsVVCGwmSuA67_W3xip45v5Yb2cbJTmvyC7hHkjzNHFebYOxv2RtB0YPfWWH7PCLjFkD-N0PM"
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + bearer
}

var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);

// Billing API's

function getAmountDue(url, headers) {
        var start_of_month = new Date(year, month, 1)
        var end_of_month = new Date(year, month + 1, 0);
        var current_unpaid_amount = 0
        var amount_due = 0
        var past_amount_due = 0
        var amount_paid = 0
        var current_amount = 0
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
                        console.log("amountPaid: " + amount_paid)
                        console.log("estimate: " + current_amount)
                        console.log("unpaidEstimate: " + current_unpaid_amount)
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

function getInvoiceHistoryData(url, headers) {
        var invoice_arr = []
        var z = 0
        fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                        query: Requests.getInvoiceList(100),
                })
        })
                .then(r => r.json())
                .then(function () {
                        // console.log(data)
                        var number_of_invoices = data.data.getInvoiceList.items.length
                        for (var n = 0; n < number_of_invoices; n++) {
                                let due_date = new Date(data.data.getInvoiceList.items[n].dueDate);
                                let start_date = new Date(data.data.getInvoiceList.items[n].startDate)
                                let end_date = new Date(data.data.getInvoiceList.items[n].endDate)
                                if (due_date >= prev_date && due_date <= act_date ||
                                        start_date >= prev_date && start_date <= act_date ||
                                        end_date >= prev_date && end_date <= act_date) {
                                        const formattedDate = due_date.toLocaleString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                        });
                                        if (z > 0) {
                                                invoice_arr[z] =
                                                {
                                                        date: formattedDate,
                                                        number: data.data.getInvoiceList.items[n].invoiceNumber,
                                                        period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                                        status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                                        amount: data.data.getInvoiceList.items[n].amountDue
                                                }
                                                z = z + 1
                                        }
                                        if (z == 0) {
                                                invoice_arr[0] =
                                                {
                                                        date: formattedDate,
                                                        number: data.data.getInvoiceList.items[n].invoiceNumber,
                                                        period: data.data.getInvoiceList.items[n].billingFrequencyName,
                                                        status: data.data.getInvoiceList.items[n].invoiceStatusName,
                                                        amount: data.data.getInvoiceList.items[n].amountDue
                                                }
                                                z = z + 1
                                        }
                                        if (z == number_of_invoices) {
                                                var sorted = invoice_arr.sort(function (a, b) {
                                                        var dateA = new Date(a.date), dateB = new Date(b.date);
                                                        return dateA - dateB;
                                                })
                                                return sorted
                                        }
                                }
                        }
                })
}

// Platform API's

function fetchAuthToken(base_url, password, username) {
        const auth_headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
        }
        const loginUrl = base_url + "/platform/identity/v1/api/oauth2/login2";
        const authorizeUrl = base_url + "/platform/identity/v1/api/oauth2/ropc/authorize";
        const loginBody = {
                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                password,
                username,
        };
        fetch(loginUrl, {
                method: 'POST',
                headers: auth_headers,
                body: JSON.stringify(loginBody)
        })
                .then(r => r.json())
                .then((accessToken) => {
                        if (typeof window !== "undefined") {
                                window.localStorage.clear();
                                window.localStorage.setItem('platform.auth-access-token', JSON.stringify(accessToken))
                        }
                        const authorizeBody = {
                                client_id: 'D82C3269-F5E3-4311-8C68-E2EAB0533751',
                                code: accessToken.result,
                        };
                        fetch(authorizeUrl, {
                                method: 'POST',
                                headers: auth_headers,
                                body: JSON.stringify(authorizeBody)
                        })
                                .then(r => r.json())
                                .then(data => {
                                        var token = String(data.id_token)
                                        console.log(data)
                                        // fs.unlinkSync('bearer.txt');
                                        // fs.appendFileSync("bearer.txt", token, "UTF-8", { 'flags': 'a+' });
                                        fs.unlinkSync('./api/billing/bearer.txt');
                                        fs.appendFileSync("./api/billing/bearer.txt", token, "UTF-8", { 'flags': 'a+' });
                                }
                                )

                });

}

function getCurrentUser(base_url, headers) {
        const url = base_url + "/platform/myhome/v1/api/currentuser/currentuser";
        fetch(url, {
                method: 'GET',
                headers: headers
        })
                .then(r => r.json())
                .then(data => console.log(data))
}

function logoff(base_url, headers) {
        const url = base_url + "/platform/identity/v1/api/oauth2logoff/logoff"
        fetch(url, {
                method: 'POST',
                headers: headers
        })
                .then(r => r.json())
                .then(data => {
                        console.log(data)
                }
                )
}

// Playground
const billing_url = "https://integration.scorpion.co/csx/billing/graphql"
// logoff("https://integration.scorpion.co", headers)
getAmountDue(billing_url, headers)
getAccountMonies(billing_url, headers,1)
// getInvoiceHistoryData(billing_url, headers)
// fs.unlinkSync('../../bearer.txt');
// fetchAuthToken("https://integration.scorpion.co", "Billing1234!!", "thebillingteam@scorpion.co")

module.exports = {
        fetchAuthToken: fetchAuthToken,
        getAmountDue: getAmountDue,
        getAccountMonies: getAccountMonies,
        getCurrentUser: getCurrentUser,
        logoff: logoff,
        getInvoiceHistoryData: getInvoiceHistoryData
}