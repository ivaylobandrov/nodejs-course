const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ivaylobandrov1@gmail.com',
        subject: 'Thanks for joining the app',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ivaylobandrov1@gmail.com',
        subject: 'Thanks for using our app. See you soon!',
        text: `By, ${name}. Let me know how you get along with the app`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}