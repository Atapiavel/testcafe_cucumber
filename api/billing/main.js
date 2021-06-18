const Requests = require("./requests");
const fetch = require("node-fetch");
var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiNUNCNTgzOTg0Qzc5RUI0N0FERDBBMTQyMjQ1QzBFRjUiLCJleHAiOjE2MjM5ODM5NjMsIm5iZiI6IjE2MjM5ODAzNjMiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.m-DcLBCaWZxoZNkE8MdpPjGjQy5BtIjsS2L0gIzHYwYYEh1MrfuQJZfDq4-wHc4tg2-d9MusVLX5KWI-BjWEHVrkjVjPJLjH0YOwKcFnAGDLLpPfPcFONVzLWEJDRUtRB4FddWBLb-GrHWFn1Bbm0X_eeWNM5ZGwbT8wxh5Au7dISiE3k7CDPLJVcFqK4sRjg6FeU1G6gLtOu5ABAgxVqEsUR4xLYnU94hg4FKRKe17kx8PhrIc2Tjzg54MsCLs775Q5xrZLxW39-TdOfQOXqQ9MEv7-6sugUlaGlit_vSPQC-0hTSHqR9LFO4Pzro4hl_nCAJ0fL5lnHZU_ins6VpGl1YpIKf640tBmQKHSVTOH0QGl068Vok_QruqoH0CrRjgKg4L4XMjQMS7enpSbLBeoN4Wr7tyqvxe4ULrZKLwbtYDO5f4kctXD7pSX4khrSHvQbuOngRQ3ZYKNBsEr_qHNYKNPEfsj3mjcswV3qfpbvS51H3V8EcNR-6BE0AGxC2vE0yzIbOHLrq16f6E3dUYX8X4_pOdQE1Yek63YwQjyGUrvVhmD5DBr4BPZTJjd21AajrcsfWYcrRrURIVOK_He2Hd6XNjrmqta-2KjWZALnPgF7hcTGlQVL_qWt5YscsTBaId8diCrREezcr7yj2KIDX5G1p5xWSW5PEJ0sgU"
var url = "https://integration.scorpion.co/csx/billing/graphql"
const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Bearer " + bearer,
}

var act_date = new Date();
var year = act_date.getFullYear();
var month = act_date.getMonth();
var day = act_date.getDate();
var prev_date = new Date(year - 1, month, day);
let invoice_arr = []
var z = 0
var amount_due = 0

function getInvoiceHistoryData(url, headers) {
        // Invoice list implementation
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
                                var invoice = data.data.getInvoiceList.items[n].invoiceId
                                console.log(invoice)
                                // Invoice implementation
                                fetch(url, {
                                        method: 'POST',
                                        headers: headers,
                                        body: JSON.stringify({
                                                query: Requests.getInvoice(invoice),
                                        })
                                })
                                        .then(r => r.json())
                                        .then(data => {
                                                let str = new Date(data.data.getInvoice.dueDate);
                                                // Adding the invoices matched with dates filters ()
                                                if (str > prev_date && str < act_date) {
                                                        const formattedDate = str.toLocaleString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric"
                                                        });
                                                        if (z > 0) {
                                                                invoice_arr[z] =
                                                                {
                                                                        date: formattedDate,
                                                                        number: data.data.getInvoice.invoiceNumber,
                                                                        period: data.data.getInvoice.billingFrequency,
                                                                        status: data.data.getInvoice.invoiceStatus,
                                                                        amount: data.data.getInvoice.amountDue
                                                                }
                                                        }
                                                        if (z == 0) {
                                                                invoice_arr[0] =
                                                                {
                                                                        date: formattedDate,
                                                                        number: data.data.getInvoice.invoiceNumber,
                                                                        period: data.data.getInvoice.billingFrequency,
                                                                        status: data.data.getInvoice.invoiceStatus,
                                                                        amount: data.data.getInvoice.amountDue
                                                                }
                                                        }
                                                        z = z + 1
                                                        console.log(i)
                                                        console.log(z)
                                                        if (z == i - 2) {
                                                                var sorted = invoice_arr.sort(function (a, b) {
                                                                        var dateA = new Date(a.date), dateB = new Date(b.date);
                                                                        return dateA - dateB;
                                                                })
                                                                console.log(sorted)
                                                                console.log(sorted[0])
                                                                console.log(sorted[0].date)
                                                        }
                                                }
                                        })
                        }
                });
}

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
                                var amount = data.data.getInvoiceList.items[n].amountDue
                                console.log(amount)
                                amount_due = amount_due + amount
                        }
                        console.log(amount_due)
                });

}

// getInvoiceHistoryData(url, headers)
getAmountDue(url, headers)
// execute_request(url, bearer, Requests.getAccountMonies(0))
// execute_request(url, bearer, Requests.getInvoiceList(100))
// execute_request(url, bearer, Requests.getBillingLocationByClient())
// execute_request(url, bearer, Requests.getInvoice("25a35fda-25c7-f2b3-e44c-66f6901a50d5"))
// execute_request(url, bearer, Requests.getPaymentMethods())
// execute_request(url, bearer, Requests.getPlatformLocations())
// execute_request(url, bearer, Requests.getPlatformUsers())
// execute_request(url, bearer, Requests.getScorpionAddress(1))
// execute_request(url, bearer, Requests.getScorpionAddress(2))
