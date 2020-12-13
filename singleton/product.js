const Logger = require('./logger');

class Product {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    Logger.log(`The $${value} product ${name} was created.`);
  }

  name() {
    return this.name;
  }
}

module.exports = Product;
