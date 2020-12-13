const Logger = require('./logger');

class Cart {
  constructor() {
    this.list = [];
    this.paymentType = '';
    Logger.log('A new shopping cart was inicialized.');
  }

  addProduct(name) {
    this.list.push(name);
    Logger.log(`The ${name} was added to the shopping cart.`);
  }

  setPaymentType(paymentType) {
    this.paymentType = paymentType;
  }

  finish() {
    Logger.log(`The user choose ${this.paymentType} as their payment type.`);
    Logger.log(`The products purchased are: ${this.list}.`);
    Logger.log(`The shopping cart was finalized!`);
  }
}

module.exports = Cart;
