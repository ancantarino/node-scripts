class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  list() {
    return this.logs.map(function (log) {
      console.log(log);
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} | ${message}`;
    this.logs.push(logMessage);
  }
}

module.exports = new Logger();
