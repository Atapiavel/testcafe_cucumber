const fetch = require("node-fetch");
const fs = require('fs')
var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiRjJEOEVERENENzQwQzk0RDk3RUNFNkQ1QkFEQkMzQTkiLCJleHAiOjE2MjI3NDY2MjMsIm5iZiI6IjE2MjI3NDMwMjMiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.FG-jKTVIgn-uCx9PwnNH0a7To03awnfqGaCPItTmM5OMcIgpo1eP3KHGXGPw43cmD9C-_OCOCMaVgVSE4Ebtrl4A0_r9or6nmpxwWNakCAGueXkL8bTprMPn1DR_MRkKw1uiSMc1XP1QHGVuqZnKpKWymhnpW7YDDN0gcr_Mu7G7NzG18v_e7I7ZOWTV3jxx-Rg0NxQYz3Fr2rBfB6RxRIVqDMzH5HiKmJOYG8CgO4xS8SaCsTWA4VMZQbtKwn5oiWDfQn577EvIMoeOHxClssY5n9gsZ3W7f95pYXmY96MTN9Z9tem2ckHk6XyeSayD251ePWYZpXWB3iwVcAXWl_Jk1BCgNWGiMut87_gCiK_zR4m1RnqoPLCq35pVg-fnVNF5U75NsBlPYCVwEnAv_C3KNkwu_YTv5sixWeuxsoDbz8umoBpHL_IPmTcc23rsYwCLSXEKTEkdPtU8sLm2tXamxEIq7_xHIm6Qp2OpUYK1JzFNB8mjxKyL2JHuo1DmKRPobJ-o3SBt3ZySrvcja5K5ncjpGUn0OhU8Vf80pHFJYFfFCJbAR7K8phi1cHsP4lFMNJg33uQdG9psjwz_ZwcjIk-ntIwLZQm6lS56N7MpLkuVN0OC9_7vptX5U4im22X9xQdawlFDOiGPDd_DJ1EFm9_YlQJ2T_bujrc6PaA"
var url = "https://integration.scorpion.co/csx/billing/graphql"

function checkStatus(res) {
  if (res.ok) { // res.status >= 200 && res.status < 300
    console.log(res.status)
    return res;
  } else {
    throw MyCustomError(res.statusText);
  }
}

function execute_request(url, bearer, file) {
  var graphql = fs.readFileSync('./api/' + file + '.graphql', 'utf8');
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": "Bearer " + bearer,
    },
    body: JSON.stringify({
      query: graphql,
    })
  })
    .then(checkStatus)
    .then(r => r.json())
    .then(data => console.log(data.log));
}

// for (var i = 0; i < 10; i++) {
//   execute_request(url, bearer, "getBillingContacts")
// }

// for (var i = 0; i < 10; i++) {
//   execute_request(url, bearer, "getActiveSubscriptions")
// }

for (var i = 0; i < 10; i++) {
  execute_request(url, bearer, "getAccountMonies")
}
