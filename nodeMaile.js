const cron = require("node-cron")

const sendEmail = async () => {
  require('dotenv').config();
  const senMail = require('@sendgrid/mail')
  senMail.setApiKey(process.env.SENDGRID_API_KEY)
  const message = {
    to: 'mvarela038@gmail.com',
    from: 'mvarela038@gmail.com',
    subject: 'Enviando e-mail com SendGrid',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  await senMail.send(message)
  module.exports = cron.schedule("*/1 * * * *", sendEmail, {
    schedule: false
  })
}