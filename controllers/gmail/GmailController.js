const GmailModel = require('../../models/gmail/GmailModel');


function sendGmail(from, mailto, subject, text, html, user, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN){
    const mailOptions = {
        from: `${from} <${from}>`,
        to: mailto,
        subject,
        text,
        html
    }

    return GmailModel.sendMail(mailOptions, user, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN).then(send => {
        return send;
    }).catch(err => {return err});
}

module.exports ={
    sendGmail: sendGmail
}
