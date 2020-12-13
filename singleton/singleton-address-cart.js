const addressCartSingleton = (() => {
  // private variable, inicialized only once
  let addressID = undefined;

  function inicializeAddressID(address) {
    this.randomID = Math.random();
    address = address || {};
    this.street = address.street;
    this.city = address.city;
    this.state = address.state;
    this.number = address.number;
    this.country = address.country;
  };

  const getAddressID = (address) => {
    if (addressID === undefined) {
      addressID = new inicializeAddressID(address);
    }
    return addressID;
  };

  return {
    getAddressID,
  }
})();
//20 W 34th St, New York, NY 10001, Estados Unidos
const addStreet = addressCartSingleton.getAddressID({ street: '20 W 34th St' });
console.log(addStreet);
const addCity = addressCartSingleton.getAddressID({ city: 'New York' });
console.log(addCity);
const addState = addressCartSingleton.getAddressID({ state: 'NY' });
console.log(addState);
const addNumber = addressCartSingleton.getAddressID({ number: 10001 });
console.log(addNumber);
const addCountry = addressCartSingleton.getAddressID({ country: 'USA' });
console.log(addCountry);
