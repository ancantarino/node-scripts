const moment = require('moment');

const generateLineChartData = () => {
  const data = [];

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  }

  const generateRandomData = (quant) => {
    let date = moment();

    for (let i = 1; i <= quant; i++) {
      const dateText = date.format('DD-MM-YYYY');
      const value = randomInt(0, 500);
      console.log(`${i}) ${dateText} | ${value}`);
      date.add(1, 'd');

      data.push({ x: dateText, y: value });
    }

    console.log('===== DATA =====');
    console.log(JSON.stringify(data));
  }

  console.log('===== GENERATE RANDOM DATA =====');
  generateRandomData(150);
}

module.exports = generateLineChartData;
