/**
 * Importamos os tipos de carro que serão possíveis de
 * serem criados.
 */
const sedan = require('./sedan');
const suv = require('./suv');
const pickup = require('./pickup');
const van = require('./van');

class CarBuilder {
  constructor() {
    this.car = null;
  }

  /**
   * Através do tipo, vamos selecionar um modelo de carro
   * que será criado.
   * @param {*} type Tipo/Modelo do carro.
   */
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

  /**
   * Adiciona bancos ao carro.
   */
  addSeats() {
    this.car.addSeats();
  }

  /**
   * Adiciona portas ao carro.
   */
  addDoors() {
    this.car.addDoors();
  }

  /**
   * Adiciona rodas ao carro.
   */
  addWheel() {
    this.car.addWheel();
  }

  get() {
    return this.car;
  }
}

module.exports = CarBuilder;