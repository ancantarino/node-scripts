class ShoppingCartSingleton {
  // private variables, inicialized when we create the class
  constructor() {
    this.cartID = Math.random();
    this.list = [];
  }

  addProduct(product) {
    return this.list.push(product);
  }

  getCartList() {
    console.log(`CartID: ${this.cartID} | List: ${JSON.stringify(this.list)}`);
  }
}

const cart01 = new ShoppingCartSingleton();
cart01.addProduct({ description: 'book', value: 50 });
cart01.getCartList();
cart01.addProduct({ description: 't-shirt', value: 30 });
cart01.getCartList();

const cart02 = new ShoppingCartSingleton();
cart02.addProduct({ description: 'pen', value: 5 });
cart02.getCartList();
cart02.addProduct({ description: 'milk', value: 7 });
cart02.getCartList();

cart01.addProduct({ description: 'juice', value: 8 });
cart01.getCartList();
