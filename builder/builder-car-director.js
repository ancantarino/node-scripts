class Director {
  buildCar(builder, type) {
    builder.getCarType(type);
    builder.addSeats();
    builder.addDoors();
    builder.addWheel();

    return builder.get();
  }
}

module.exports = Director;