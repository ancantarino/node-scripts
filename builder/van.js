/**
 * Define como será o modelo de carro Van.
 */
class Van {
  constructor() {
    console.log('- A new Van will be construct');
  }

  /**
   * Adiciona a quantidade de assentos de um carro Van.
   */
  addSeats() {
    this.seats = 9;
  }

  /**
   * Adiciona a quantidade de portas de um carro Van.
   */
  addDoors() {
    this.doors = 3;
  }

  /**
   * Adiciona a quantidade de rodas de um carro Van.
   */
  addWheel() {
    this.wheel = 4;
  }

  /**
   * Retorna as características de um carro Van.
   */
  getModel() {
    console.log(`* A new Van car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Van;