/**
 * Importar o Diretor que vai definir a order de execução
 * das etapas para criar um carro.
 */
const BuilderCarDirector = require('./builder-car-director');

/**
 * O Builder vai definir as etapas usadas na
 * construção de um carro.
 */
const CarBuilder = require('./car-builder');

const makeNewCar = new BuilderCarDirector();
const carBuilder = new CarBuilder();

/**
 * Dizemos ao Diretor qual novo carro queremos construir,
 * passando o Builder, que sabe as etapas de construção e
 * o tipo do carro.
 */
const sedan = makeNewCar.buildCar(carBuilder, 'sedan');
const suv = makeNewCar.buildCar(carBuilder, 'suv');
const pickup = makeNewCar.buildCar(carBuilder, 'pickup');
const van = makeNewCar.buildCar(carBuilder, 'suv');

/**
 * Descrevemos o modelo de carro criado.
 */
sedan.getModel();
suv.getModel();
pickup.getModel();
van.getModel();