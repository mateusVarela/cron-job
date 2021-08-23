const sendMailDaily = require("./cron/sendMailDaily")

class ManagerCron {
  constructor() {
    this.jobs = [sendMailDaily]
  }

  run() {
    this.jobs.forEach(job => job.start())
  }
}

module.exports = new ManagerCron()