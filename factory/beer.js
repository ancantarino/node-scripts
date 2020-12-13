/**
 * Classe que representa os métodos e atributos da bebida cerveja (beer)
 * */

class Beer {
  constructor({ calories, volume, sodium, alcohol }) {
    this.calories = calories;
    this.volume = volume;
    this.sodium = sodium;
    this.alcohol = alcohol;
  }

  calories() {
    return this.calories;
  }

  volume() {
    return this.volume;
  }

  sodium() {
    return this.sodium;
  }

  alcohol() {
    return this.alcohol;
  }
}

module.exports = Beer;
