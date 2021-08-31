const express = require('express')
const ManagerCron = require("./managerCron")

const app = express()

app.listen(3333, () => {
  console.log("Servidor rodando...")

  ManagerCron.run()
})