const nodemailer = require("nodemailer")
let testAccount = nodemailer.createTestAccount();

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: testAccount.user,
    pass: testAccount.pass,
  }
})

const emailTo = {
  from: `${testAccount.user}`,
  to: "mvarela038@gmail.com",
  subject: "Enviando Email com Node.js",
  text: "Estou te enviando este email com node.js",
};

const sendEmail = () => {
  transport.sendMail(emailTo, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado com sucesso.");
    }
  })
}

module.exports = sendEmail()