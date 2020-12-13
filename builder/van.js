class Van {
  constructor() {
    console.log('A new Van will be construct');
  }

  addSeats() {
    this.seats = 9;
  }

  addDoors() {
    this.doors = 3;
  }

  addWheel() {
    this.wheel = 4;
  }

  getModel() {
    console.log(`A new Van car was created with: ${this.seats} seats, ${this.doors} doors and ${this.wheel} wheels.`)
  }
}

module.exports = Van;