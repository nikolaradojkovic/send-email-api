const nodemailer = require('nodemailer');
const { google } = require('googleapis');


async function sendMail(mailOptions, user, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN) {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        return transport.sendMail(mailOptions).then(res => {
            return res;
        });
    } catch (error) {
        return error;
    }
}

module.exports = {
    sendMail: sendMail,
}

