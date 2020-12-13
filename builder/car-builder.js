
const sedan = require('./sedan');
const suv = require('./suv');
const pickup = require('./pickup');
const van = require('./van');

class CarBuilder {
  constructor() {
    this.car = null;
  }

  getCarType(type) {
    switch (type) {
      case 'sedan':
        this.car = new sedan();
        break;
      case 'suv':
        this.car = new suv();
        break;
      case 'pickup':
        this.car = new pickup();
        break;
      case 'van':
        this.car = new van();
        break;
      default:
        this.car = new sedan();
    }
  }

  addSeats() {
    this.car.addSeats();
  }

  addDoors() {
    this.car.addDoors();
  }

  addWheel() {
    this.car.addWheel();
  }

  get() {
    return this.car;
  }
}

module.exports = CarBuilder;