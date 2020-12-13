class Sedan {
  constructor() {
    console.log('A new Sedan will be construct');
  }

  addSeats() {
    this.seats = 2;
  }

  addDoors() {
    this.doors = 4;
  }

  addWheel() {
    this.wheel = 4;
  }

  getModel() {
    console.log(`A new Sedan car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Sedan;