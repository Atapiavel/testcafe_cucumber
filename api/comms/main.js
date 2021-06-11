const Requests = require("./requests.js");
const fetch = require("node-fetch");
var bearer = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiRDAxQ0I4OEJGMEI4ODY0QjlDRjFBMzBGRDg2MzNEM0MiLCJleHAiOjE2MjM0NTI2MDgsIm5iZiI6IjE2MjM0NDkwMDgiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiZWFiYWQzNGItMWVlNi00NzdjLWFiOGYtMmQwNTJkYmE4ZGQ5IiwidXNlcklkIjoxMzM2OCwidXNlckd1aWQiOiIwYWU1YzljZC1kZTZmLTQ0OWYtMDM4Zi0wNzhlOTBjMDUxMGYiLCJuYW1lIjoiQXJ0dXJvIFRhcGlhIFZlbGFzY28iLCJlbWFpbCI6ImFydHVyby50YXBhaWFAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjpmYWxzZSwibG9jYWxVc2VyIjpmYWxzZSwiaW1wZXJzb25hdGVkIjpmYWxzZSwibXVsdGlUZW5hbnQiOmZhbHNlLCJjbGllbnRJZCI6NDE5NywiY2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsIm9yaWdpbmFsQ2xpZW50SWQiOjQxOTcsIm9yaWdpbmFsQ2xpZW50R3VpZCI6ImI5NmJlOWQwLTZjYWItOTk0Ni1hNDU4LTJhNTFlZTkxOTk0OCIsInN5c3RlbVJvbGVzIjoiMCIsImFjY291bnRSb2xlcyI6IjAiLCJwZXJtaXNzaW9ucyI6IlsyNDMxODg0NiwyNjIxNDQsMSw4MjExODk5MjAsMTY3ODExOTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSIsImFwaWtleSI6ZmFsc2UsImVuYWJsZUFwaUxvZyI6ZmFsc2UsImhpcGFhIjpmYWxzZSwiaXNzIjoiaWRlbnRpdHkuc2NvcnBpb24uY28iLCJhdWQiOiJ1c2VycyJ9.KJ0ss8p0z4axGWZKHk_pc5UxnTLJP3mwxXp6cxvwwCK1ifqYmeQ6kht3pm77_WvcWjUmHcjxxJ00GKkmdamJ4fvz7Lh-Il-RtVxoVBZy7k55kftG3B9afwj0tHMBx-_RpzmAn390hLvaSN4Qn5dcC0jlPzBHHTvCOq96N4tWtPvmbhN37J_a7ro04-Ta2Bq7k16yJPLNEfHjR6mSnjOcaoF0ltRrEAH7S_AF2a1a5zATgRnc3JZEECQp_v3MQiAjc9PCpuCM1LZYe610M1jNpusjC53jBxabgx20qRIVkAqCBS82hp2mq1kxWzi2LqKkqxhTFOEI9Sx7Hih3UKtGvoUfweF4pXX7sgAqK4JaucnTgwxYvDhF5hAk4Hn_Z_qKBYnljDnOA7RXwjAFb0NKnBrHxNVVgCFouvGU4wUvTMEOtyuZdWEzKFl1VKX2y4Bg99pGTtFYssi0Ez2FCArMx6oLNvbfPcaALW97lNg56F1r-gRC9AVQaaxxJTfOemIvOe_4c-FMEKfkbO_-9m1ZzogId6xuZVXQbdIKX3_KjmiSMOXitfRZb8u4WX8cU_OnL5sA3RVW_H_I5r4yz79EGuNH5uBWVbw-iW9pwcgtv_pLDvteom05MptbEdYmVVVvUAS0dufN0BmKaJjOSzmb-sHc3waAwgVbWBoEx_fySIo"
var url = "https://integration.scorpion.co/csx/billing/graphql"
const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Bearer " + bearer,
}

// Invoice list implementation
function execute_request(url, headers, request) {
        fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                        query: request,
                })
        })
                .then(r => r.json())
                .then(data => {
                        console.log(data)
                        console.log(data.data)
                        console.log(data.data.getInvoiceList)
                        console.log(data.data.getInvoiceList.items)
                        console.log(data.data.getInvoiceList.items[0])
                        console.log(data.data.getInvoiceList.items[0].invoiceId)
                })

}

execute_request(url, headers, Requests.getInvoiceList(100))
