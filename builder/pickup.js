/**
 * Define como será o modelo de carro Pickup.
 */
class Pickup {
  constructor() {
    console.log('- A new Pickup will be construct');
  }

  /**
   * Adiciona a quantidade de assentos de um carro Pickup.
   */
  addSeats() {
    this.seats = 1;
  }

  /**
   * Adiciona a quantidade de portas de um carro Pickup.
   */
  addDoors() {
    this.doors = 2;
  }

  /**
   * Adiciona a quantidade de rodas de um carro Pickup.
   */
  addWheel() {
    this.wheel = 4;
  }

  /**
   * Retorna as características de um carro Pickup.
   */
  getModel() {
    console.log(`* A new Pickup car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Pickup;