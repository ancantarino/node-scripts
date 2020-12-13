class Pickup {
  constructor() {
    console.log('A new Pickup will be construct');
  }

  addSeats() {
    this.seats = 1;
  }

  addDoors() {
    this.doors = 2;
  }

  addWheel() {
    this.wheel = 4;
  }

  getModel() {
    console.log(`A new Pickup car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Pickup;