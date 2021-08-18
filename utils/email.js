const pug = require('pug');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const OAuth2 = google.auth.OAuth2;

module.exports = class Email {
    constructor(data) {
        this.to = data.email;
        this.name = data.name;
        this.from = `Omokugbo Boro <${process.env.EMAIL_FROM}>`;
    }

    async newTransport() {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            'https://developers.google.com/oauthplayground'
        );

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        });

        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject();
                }
                resolve(token);
            });
        });

        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL_FROM,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
            },
        });
    }

    //Send the actual email
    async send(subject, data) {
        //Define the email options
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            text: data ?
                `Hey man.\n\n${data.name} just used the form on the HNG Stage 2 Backend Task.\n\nEmail address: ${data.email}.\n\nMessage: ${data.message}\n\nAdios!!` :
                `Hello ${
            this.name.split(' ')[0]
          }.\n\nThank you for reaching out. I'd go through your message and get back to you as soon as possible;\n\nUntil next time,\nBoro Omokugbo Joseph
            `,
        };

        const transport = await this.newTransport();

        //Create a transport and send email
        await transport.sendMail(mailOptions);
    }

    async sendSuccess() {
        await this.send('Thank you for reaching out!', undefined);
    }

    async sendSuccessAdmin(data) {
        await this.send('New message from portfolio form', data, undefined);
    }
};