const express = require('express')
const ManagerCron = require("./managerCron")
const email = require("./nodeMaile")
email

const app = express()

app.listen(3333, () => {
  console.log("Servidor rodando...")

  ManagerCron.run()
})