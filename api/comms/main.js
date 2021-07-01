const Requests = require("./requests.js");
const fetch = require("node-fetch");
var bearer = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImU1Mzg0NTE3LTdlM2ItNDQxYi1hMjczLTk0MDcxODU1ODEwNSIsInR5cCI6IkpXVCJ9.eyJzdWlkIjoiQzEyQTZGNENGNjQ3QkQ0MDhBMThFRTc2RDc1RkJGREUiLCJleHAiOjE2MjUxMDE5MjksIm5iZiI6IjE2MjUwOTgzMjkiLCJlbnYiOiJpbnRlZ3JhdGlvbi10eCIsImlkZW50aXR5IjoiMDAwOTM5MTUtYTZhMC00ZjY3LTgzZmEtY2E4YmQxMDkwOWIzIiwidXNlcklkIjoxNDUzOCwidXNlckd1aWQiOiJhNTkwYjZmOC1lMGI3LWZhZGYtOWRkZS0yOTNmMGE2ZWIzZDciLCJuYW1lIjoiQ3VzdG9tZXIgU2VydmljZSBSZXAiLCJlbWFpbCI6ImNvbW1jZW50ZXJAc2NvcnBpb24uY28iLCJhY2NvdW50IjoiYjk2YmU5ZDAtNmNhYi05OTQ2LWE0NTgtMmE1MWVlOTE5OTQ4Iiwic2NvcnBpb25Vc2VyIjp0cnVlLCJsb2NhbFVzZXIiOmZhbHNlLCJpbXBlcnNvbmF0ZWQiOmZhbHNlLCJtdWx0aVRlbmFudCI6dHJ1ZSwiY2xpZW50SWQiOjQxOTcsImNsaWVudEd1aWQiOiJiOTZiZTlkMC02Y2FiLTk5NDYtYTQ1OC0yYTUxZWU5MTk5NDgiLCJvcmlnaW5hbENsaWVudElkIjo0MTk3LCJvcmlnaW5hbENsaWVudEd1aWQiOiJiOTZiZTlkMC02Y2FiLTk5NDYtYTQ1OC0yYTUxZWU5MTk5NDgiLCJzeXN0ZW1Sb2xlcyI6IjAiLCJhY2NvdW50Um9sZXMiOiIwIiwicGVybWlzc2lvbnMiOiJbMjQzMTg4NDYsNjU1MzYwMCwxLDgyMTE4OTkyMCwzMzU0MjAyNCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdIiwiYXBpa2V5IjpmYWxzZSwiZW5hYmxlQXBpTG9nIjpmYWxzZSwiaGlwYWEiOmZhbHNlLCJpc3MiOiJpZGVudGl0eS5zY29ycGlvbi5jbyIsImF1ZCI6InVzZXJzIn0.Q7dIpIi2eRyVHr_GN3YfvXLpN6OdMGJVOz_-3g7zEwU3BbONm1P9SBBvCJodk5lryqHHf-FLqRkiTvGRK4iDw3oa9OG3azjxwgd56kLzJup-0h6Pz7EpC8_DLS3KKCtKxCz9Bx9AzEL5MEL5DwIdX_vcTEu8qUQceBAhYnT7d3E8Pnq-K1XgYKzSL_NXHYEoqZSU_4husdgosTcVxii8UBetHbUnXD1dzqQOAbaWSHOK-S4Ta4RwFiffOidTrVcFmpzAemnR0h5KWOnWfbO5nmKZQdT9_AffL1Z5baFnBJLMLsF2Xb_-cHf9UVtxRZVe-_NmFPrvExeLd8xaJvbsFUJAEh1CWoCHSDYtYohwpM1_8r4nJaF0CXqEfohLSw0ovo2hX0NK7jndT0t47gYCGZw7KhXhU2VSXRTx4Zk77kHiDFK4ks2EQLwldDzd2lQdOLHu-XIBtXj1dzwiPKSOdFemfBXHoEdpXQe0C5jmHDM5lGMmzp2lRy4r6N-ZWPS0xQwa4lpiHr6I10jumdbS8lZNm2S-S1AK4NmXkmQtigYb4cDQpuZzrBj5r5KNfGBi0MftjBe-jZi5OLGhepw-QjGn2WP4K4t0-7QevAqbpIFRbi2wddrZ8mwS6REabaG-i2cGi_58qA5lhRKsVnvG99Sfiq6aMUzsBNZrgvMXElA"
var url = "https://integration.scorpion.co/communicationsplatform/commscenter/graphql"
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
                        // console.log(data.data)
                        // console.log(data.data.communicationSearch)
                        // console.log(data.data.communicationSearch.items)
                        // console.log(data.data.communicationSearch.items[0])
                        // console.log(data.data.communicationSearch.items[0].communicationID)
                })

}

execute_request(url, headers, Requests.getCommunicationList(100))
