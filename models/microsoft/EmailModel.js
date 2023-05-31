const axios = require("axios");
const qs = require("qs");
const auth = require('./auth')

let headers= {
    'Authorization': '',
    'Content-Type': 'application/json',
}

function sendNewEmail (user_id, client_id, client_secret, tenant_id, body) {
    return  auth.getToken( client_id, client_secret, tenant_id).then(token => {
        headers.Authorization = `Bearer ${token.access_token}`;
        //console.log({token})

        return axios.post(`https://graph.microsoft.com/v1.0/users/${user_id}/sendMail`, body, { headers }
        ).then(function (response) {
            //console.log(response)
            return {data: response.data, status: response.status};
        }).catch(function (error) {
            return {e: 'send email error', error};
        })
    }).catch(err => {
        return {e: 'token error', err}
    })
}



module.exports = {
    sendNewEmail: sendNewEmail
}

