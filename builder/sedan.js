/**
 * Define como será o modelo de carro Sedan.
 */
class Sedan {
  constructor() {
    console.log('- A new Sedan will be construct');
  }

  /**
   * Adiciona a quantidade de assentos de um carro Sedan.
   */
  addSeats() {
    this.seats = 2;
  }

  /**
   * Adiciona a quantidade de portas de um carro Sedan.
   */
  addDoors() {
    this.doors = 4;
  }

  /**
   * Adiciona a quantidade de rodas de um carro Sedan.
   */
  addWheel() {
    this.wheel = 4;
  }

  /**
   * Retorna as características de um carro Sedan.
   */
  getModel() {
    console.log(`* A new Sedan car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Sedan;