const sgMail = require('@sendgrid/mail')

function sendEmail (to, from, subject, html, text, apiKey){
    sgMail.setApiKey(apiKey)
    const msg = {
        to,
        from,
        subject,
        text,
        html
    }
    return sgMail
        .send(msg)
        .then(() => {
            return {status: true, message:'Email sent.'}
        })
        .catch((error) => {
            return {status: false, error}
        })
}

module.exports = {
    sendEmail: sendEmail
}
