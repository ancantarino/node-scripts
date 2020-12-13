class Suv {
  constructor() {
    console.log('A new SUV will be construct');
  }

  addSeats() {
    this.seats = 6;
  }

  addDoors() {
    this.doors = 4;
  }

  addWheel() {
    this.wheel = 4;
  }

  getModel() {
    console.log(`A new SUV car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Suv;