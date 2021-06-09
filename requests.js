const Requests = require("./api/requests.js");
const fetch = require("node-fetch");
const { sort } = require("shelljs");
var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiNTkyODdEQjYxN0NDNzU0RjhEOEMyRjIzMDM4MUY1MjkiLCJleHAiOjE2MjMxOTcyMDksIm5iZiI6IjE2MjMxOTM2MDkiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.ZNiv5GiHdDO72BdNLOiwPpfL62V8S6rN7FGAkIqoAxL_fk_SCXtx0QTK0QyPeiKRhJH38lNXzeJ6MFQtJuVZGRtxIKiw2nBAXvNi1wh8JDYG8T1BGn2j_UIdB-nPuKuYEhaAMigWB_p_0dWF2AdScs0OH9d40ElEspFjWcK8xaG7jsTFQ0NC1orxyC_Oz48uvUjnck3AR5LKvuYmC9HZe0MUaibasMvDez-KhfYXyIby2hgbHi97c8s1Y67gDO149xnf-lUlfBUc7Rx3BJudUfRs3fuX8F5rR3PqwvdnVnGxOro8vnMV2bC5zvO8U369lGQ1GnH5xMOaqNzOygiDTbJt_Q3JSCqD7a9oWgu56ES1PfKtQtLazJJChel9EOVeLYTmJ_sIS0vJFPLQQJ5Kted_ADcKyr_ZXqqyDSx4pwrof_-Wmr3xi5KvMGzOsch_WuC9y-U7hWk53FWED7vkS5lA4oz_Fb19KhYSqj-SWypKdJ1ysKVPs-xnNmJpwjreb-xl6DXiOZEa-zhXl9AxYppPs2uofy00yuUa0D213gVLnCW6jCJwwA_-AGkdI_AkNjWBgMW-fouMXH4f91Y0MbQl1S-qzG0JmN9TjnsiXBC7B5wYs2Jvc9oo7g3xDzCiFVl2eyLWawPPaSmhakm6f3Kr6uvlXvQ-AmSW2zzQ6yg"
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
          if (str > prev_date && str < act_date) {
            const formattedDate = str.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            });
            if (z > 0) {
              invoice_arr[z] = [
                {
                  date: formattedDate,
                  number: data.data.getInvoice.invoiceNumber,
                  period: data.data.getInvoice.billingFrequency,
                  status: data.data.getInvoice.invoiceStatus,
                  amount: data.data.getInvoice.amountDue
                }
              ]
            }
            if (z == 0) {
              invoice_arr[0] = [
                {
                  date: formattedDate,
                  number: data.data.getInvoice.invoiceNumber,
                  period: data.data.getInvoice.billingFrequency,
                  status: data.data.getInvoice.invoiceStatus,
                  amount: data.data.getInvoice.amountDue
                }
              ]
            }
            z = z + 1
            // console.log(invoice_arr)
            if (z == 10) {
              console.log(invoice_arr)
              var sorted = invoice_arr[0].sort(function (a, b) {
                console.log(a.date)
                console.log(b.date)
                var dateA = new Date(a.date), dateB = new Date(b.date);
                console.log(dateA)
                console.log(dateB)
                return dateA - dateB;
              })
              console.log(sorted)
            }
            // for (var y = 0; y < invoice_arr.length; y++) {
            //   console.log(y)
            //   var aux = invoice_arr[y]
            //   var date = aux[0]
            //   console.log(date)
            // }
          }
        })
    }
  });

// execute_request(url, bearer, Requests.getBillingContacts())
// execute_request(url, bearer, Requests.getActiveSubscriptions())
// execute_request(url, bearer, Requests.getAccountMonies(0))
// execute_request(url, bearer, Requests.getInvoiceList(100))
// execute_request(url, bearer, Requests.getBillingLocationByClient())
// execute_request(url, bearer, Requests.getInvoice("25a35fda-25c7-f2b3-e44c-66f6901a50d5"))
// execute_request(url, bearer, Requests.getPaymentMethods())
// execute_request(url, bearer, Requests.getPlatformLocations())
// execute_request(url, bearer, Requests.getPlatformUsers())
// execute_request(url, bearer, Requests.getScorpionAddress(1))
// execute_request(url, bearer, Requests.getScorpionAddress(2))
