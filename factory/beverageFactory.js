/**
 * Método fábrica para criar uma bebida.
 * O código fica isolado em um método que de acordo com o tipo da bebida
 * vai criar uma nova bebida utilizando os atributos necessários.
 * */

const Beer = require("./beer");
const Water = require("./water");
const Wine = require("./wine");

const beverage = { Beer, Water, Wine };

module.exports = {
  createBeverage(type, attributes) {
    const BeverageType = beverage[type];
    return new BeverageType(attributes);
  }
};
