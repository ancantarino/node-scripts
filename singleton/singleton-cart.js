const Logger = require('./logger');
const Cart = require('./cart');
const Product = require('./product');
const Payment = require('./payment');

const cart = new Cart();
const wine = new Product('wine', 50);
const cheese = new Product('cheese', 20);
const payment = new Payment('money');
cart.addProduct(wine.name);
cart.addProduct(cheese.name);
cart.setPaymentType(payment.type);
cart.finish();

Logger.list();
console.log('---------------------------')
console.log(`Logs count: ${Logger.count}`);
