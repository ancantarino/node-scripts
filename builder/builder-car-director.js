/**
 * O Diretor vai definir a ordem de execução das etapas
 * na construção de um carro.
 */
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