const Requests = require("./requests.js");
const fetch = require("node-fetch");
const ActionsPage = require('../../pages/actions.pages.js')
var bearer = ActionsPage.read_bearer()
var url = "https://integration.scorpion.co/communicationsplatform/commscenter/graphql"
const fs = require('fs');
const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Bearer " + bearer,
}
console.log(headers)

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
                                        fs.unlinkSync('./bearer.txt');
                                        fs.appendFileSync("./bearer.txt", token, "UTF-8", { 'flags': 'a+' });
                                }
                                )

                });

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

execute_request(url, headers, Requests.getCommunicationList(100))
// fetchAuthToken("https://integration.scorpion.co","Team123!", "joehaus895@gmail.com")
// logoff("https://integration.scorpion.co", headers)