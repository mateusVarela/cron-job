const sendMailDaily = require("./cron/sendMailDaily")
const email = require("./nodeMaile")


class ManagerCron {
  constructor() {
    this.jobs = [sendMailDaily, email]
  }

  run() {
    this.jobs.forEach(job => job.start())
  }
}

module.exports = new ManagerCron()