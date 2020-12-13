const BuilderCarDirector = require('./builder-car-director');
const CarBuilder = require('./car-builder');

const makeNewCar = new BuilderCarDirector();
const carBuilder = new CarBuilder();

const sedan = makeNewCar.buildCar(carBuilder, 'sedan');
const suv = makeNewCar.buildCar(carBuilder, 'suv');
const pickup = makeNewCar.buildCar(carBuilder, 'pickup');
const van = makeNewCar.buildCar(carBuilder, 'suv');

sedan.getModel();
suv.getModel();
pickup.getModel();
van.getModel();