const EmailModel = require('../../models/microsoft/EmailModel');


function sendEmail(user_id, client_id, client_secret, tenant_id, mailto, subject, html){
    let body = {
        "message" : {
            "subject": subject,
            "body" : {
                "contentType": "html",
                "content": html
            },
            "toRecipients": [
                {
                    "emailAddress" : {
                        "address" : mailto
                    }
                }
            ] ,
            "ccRecipients": [
                {
                    "emailAddress" : {
                        "address" : mailto
                    }
                }
            ] ,
            "bccRecipients": [
                {
                    "emailAddress" : {
                        "address" : mailto
                    }
                }
            ]
        }
    }

    return EmailModel.sendNewEmail(user_id, client_id, client_secret, tenant_id, body).then(send => {
        return send;
    }).catch(err => {return err});
}

module.exports ={
    sendEmail: sendEmail
}
