/**
 * Classe que representa os métodos e atributos da bebida água (water)
 * */

class Water {
  constructor({ calories, volume, protein, sodium }) {
    this.calories = calories;
    this.volume = volume;
    this.protein = protein;
    this.sodium = sodium;
  }

  calories() {
    return this.calories;
  }

  volume() {
    return this.volume;
  }

  protein() {
    return this.protein;
  }

  sodium() {
    return this.sodium;
  }
}

module.exports = Water;
