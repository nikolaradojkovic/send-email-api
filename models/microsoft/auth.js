const axios = require("axios");
const qs = require('qs');

let headers = {
    'Accept': '*/*',
    'Connection' : 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded'
}

async function getToken(client_id, client_secret, tenant_id){
    let scope = `https://graph.microsoft.com/.default`;
    let grant_type = `client_credentials`

    const data = {
        client_id,
        client_secret,
        grant_type,
        scope,
    };

    const requestBody = qs.stringify(data);

    return axios.post(`https://login.microsoftonline.com/${tenant_id}/oauth2/v2.0/token?grant_type=client_credentials`, requestBody, { headers }
    ).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error;
    })
}

module.exports = {
    getToken: getToken
}
