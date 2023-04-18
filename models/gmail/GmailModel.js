const nodemailer = require('nodemailer');
const { google } = require('googleapis');

/*const CLIENT_ID = '446056088829-gm7s3okiv64lij72h368qt8pt9sp6q0l.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04Si-2wT3Jg9UCgYIARAAGAQSNwF-L9IrV3whovhQyVWqrvhy-u2TBM4BjxRoGOU8GLoNmeWG61zqmbn3cW2MdtQgifGjskr2IP0';*/

/*const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})*/

async function sendMail(mailOptions, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN) {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN})
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "reports@zingley.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        /*const mailOptions = {
            from: 'Time Tracking Reminder 🕑 <betashp@gmail.com>',
            to: 'radojkovic.nikola.gaf@gmail.com',
            subject: 'Hello from Time Tracking Reminder',
            text: 'Hello from Time Tracking Reminder 🕑',
            html: `<h1>Hello from Time Tracking Reminder 🕑</h1>`
        }*/

        return transport.sendMail(mailOptions).then(res => {
            //console.log(res);
            return res;
        });
    } catch (error) {
        return error;
    }
}

module.exports = {
    sendMail: sendMail,
}

