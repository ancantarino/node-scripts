const Logger = require('./logger');

class Payment {
  constructor(type) {
    this.type = type;
    Logger.log(`The ${type} payment type was created.`);
  }

  type() {
    return this.type;
  }
}

module.exports = Payment;
