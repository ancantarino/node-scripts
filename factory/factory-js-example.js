/**
 * Importar o método utilizando o design pattern Factory para criar uma bebida,
 * conforme seus atributos.
 */
const beverageFactory = require("./beverageFactory");

const beer = beverageFactory.createBeverage("Beer", {
  calories: 150,
  volume: 500,
  sodium: 5,
  alcohol: 8,
});
const water = beverageFactory.createBeverage("Water", {
  calories: 150,
  volume: 500,
  protein: 2,
  sodium: 5,
});
const wine = beverageFactory.createBeverage("Wine", {
  calories: 150,
  volume: 500,
  protein: 2,
  sodium: 5,
  alcohol: 8,
});

console.log(beer);
console.log(water);
console.log(wine);
