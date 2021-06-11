// // const Requests = require("./api/requests.js");
// // const fetch = require("node-fetch");
// // var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiOEUzODhGREUxQkY2QjE0ODkwN0MzM0Y4NjAxREE0MjciLCJleHAiOjE2MjMyMDE2NTMsIm5iZiI6IjE2MjMxOTgwNTMiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.DBDZKHsHIFUNROW4RgPOBCRBG6c2svskysrrySPnD8r4egRq3GKZvpguDa8ISNGIfCv3bD_z6xr1MIaER26_nnW5egUGC8dTAAEP9KkcqEZYOjnCy0nkFkrXZf81pAcPcyzJvoB6WOZaph1JXkJtrV4y97gZtmdMhWfqVu9N61c1S6eBcPBiUAvVo7h2O1_PKXDPoavFMY1VzMI4CmAZgKGNgPMu7Wl0ZEcfzNptyjSOrHleE76ahHKDZGsb7Zud64Q3RG-uC6b4Uv9StMRjGhooVyLBx-X8X_x0X6mCu2O9bRT8U0E21lnqSGUNkw8HQ8jgk9ASti8Gy7Gg05kFknozz2eILmHupksphwsHg580mX8Vt8eI8w2dfRcGStB6mPxn_Gd5MSmCsXZdhEY_yg_IMPdWv6VDqpshgw_mKxKiZ8KfSa-2nS2I7hIdb7_YBO8TNAOWjgbWfNZJGM6SESKsY5GYJixdacyI9Iz1aP6R_W-8gcthftW8D4vD8XuBAffuzt1k9RmLbWzarVKz_7va6Ee1dWVeAcVgWAH7S3xAaI2VK_nCi3pTIJmSduGIzKjrlPVSFhLKMRxoVpDOyhSLhy305o_4J-duQnjehnT1hXax6gHrP5l6yMa16Rbf5R1BL9o1eVm4VsumUP9KTASRpx0elxiyd_-jwif5Qz0"
// // var url = "https://integration.scorpion.co/csx/billing/graphql"
// // const headers = {
// //   'Content-Type': 'application/json',
// //   'Accept': 'application/json',
// //   "Authorization": "Bearer " + bearer,
// // }

// // var act_date = new Date();
// // var year = act_date.getFullYear();
// // var month = act_date.getMonth();
// // var day = act_date.getDate();
// // var prev_date = new Date(year - 1, month, day);
// // let invoice_arr = []
// // var z = 0

// // // Invoice list implementation
// // fetch(url, {
// //   method: 'POST',
// //   headers: headers,
// //   body: JSON.stringify({
// //     query: Requests.getInvoiceList(100),
// //   })
// // })
// //   .then(r => r.json())
// //   .then(data => {
// //     var i = data.data.getInvoiceList.items.length
// //     for (var n = 0; n < i; n++) {
// //       var invoice = data.data.getInvoiceList.items[n].invoiceId
// //       // Invoice implementation
// //       fetch(url, {
// //         method: 'POST',
// //         headers: headers,
// //         body: JSON.stringify({
// //           query: Requests.getInvoice(invoice),
// //         })
// //       })
// //         .then(r => r.json())
// //         .then(data => {
        // //   let str = new Date(data.data.getInvoice.dueDate);
        // //   // Adding the invoices matched with dates filters ()
        // //   if (str > prev_date && str < act_date) {
        // //     const formattedDate = str.toLocaleString("en-US", {
        // //       month: "short",
        // //       day: "numeric",
        // //       year: "numeric"
        // //     });
// //             if (z > 0) {
// //               invoice_arr[z] = 
// //                 {
// //                   date: formattedDate,
// //                   number: data.data.getInvoice.invoiceNumber,
// //                   period: data.data.getInvoice.billingFrequency,
// //                   status: data.data.getInvoice.invoiceStatus,
// //                   amount: data.data.getInvoice.amountDue
// //                 }
// //             }
// //             if (z == 0) {
// //               invoice_arr[0] = 
// //                 {
// //                   date: formattedDate,
// //                   number: data.data.getInvoice.invoiceNumber,
// //                   period: data.data.getInvoice.billingFrequency,
// //                   status: data.data.getInvoice.invoiceStatus,
// //                   amount: data.data.getInvoice.amountDue
// //                 }
// //             }
// //             z = z + 1
// //             // console.log(invoice_arr)
// //             if (z == 10) {
// //               // console.log(invoice_arr)
// //               var sorted = invoice_arr.sort(function (a, b) {
// //                 console.log(invoice_arr[0].date)
// //                 var dateA = new Date(a.date), dateB = new Date(b.date);
// //                 return dateA - dateB;
// //               })
// //               // console.log(sorted)
// //             }
// //             // for (var y = 0; y < invoice_arr.length; y++) {
// //             //   console.log(y)
// //             //   var aux = invoice_arr[y]
// //             //   var date = aux[0]
// //             //   console.log(date)
// //             // }
// //           }
// //         })
// //     }
// //   });

// // // execute_request(url, bearer, Requests.getBillingContacts())
// // // execute_request(url, bearer, Requests.getActiveSubscriptions())
// // // execute_request(url, bearer, Requests.getAccountMonies(0))
// // // execute_request(url, bearer, Requests.getInvoiceList(100))
// // // execute_request(url, bearer, Requests.getBillingLocationByClient())
// // // execute_request(url, bearer, Requests.getInvoice("25a35fda-25c7-f2b3-e44c-66f6901a50d5"))
// // // execute_request(url, bearer, Requests.getPaymentMethods())
// // // execute_request(url, bearer, Requests.getPlatformLocations())
// // // execute_request(url, bearer, Requests.getPlatformUsers())
// // // execute_request(url, bearer, Requests.getScorpionAddress(1))
// // // execute_request(url, bearer, Requests.getScorpionAddress(2))
