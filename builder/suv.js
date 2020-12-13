/**
 * Define como será o modelo de carro SUV.
 */
class Suv {
  constructor() {
    console.log('A new SUV will be construct');
  }

  /**
   * Adiciona a quantidade de assentos de um carro SUV.
   */
  addSeats() {
    this.seats = 6;
  }

  /**
   * Adiciona a quantidade de portas de um carro SUV.
   */
  addDoors() {
    this.doors = 4;
  }

  /**
   * Adiciona a quantidade de rodas de um carro SUV.
   */
  addWheel() {
    this.wheel = 4;
  }

  /**
   * Retorna as características de um carro SUV.
   */
  getModel() {
    console.log(`A new SUV car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Suv;