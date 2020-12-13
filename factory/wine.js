/**
 * Classe que representa os métodos e atributos da bebida vinho (wine)
 * */

class Wine {
  constructor({ calories, volume, protein, sodium, alcohol }) {
    this.calories = calories;
    this.volume = volume;
    this.protein = protein;
    this.sodium = sodium;
    this.alcohol = alcohol;
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

  alcohol() {
    return this.alcohol;
  }
}

module.exports = Wine;
