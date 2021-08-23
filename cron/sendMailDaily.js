const cron = require("node-cron")

function sendMailDaily() {
  console.log("Enviar email por minuto...")
}

module.exports = cron.schedule("*/1 * * * *", sendMailDaily, {
  schedule: false
})