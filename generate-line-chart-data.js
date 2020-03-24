const moment = require('moment');

const generateLineChartData = () => {
  const data = [];

  const randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  }

  const getValueByDate = (quant) => {
    let date = moment();

    for (let i = 0; i < quant; i++) {
      const dateText = date.format('DD-MM-YYYY');
      const value = randomInt(0, 500);
      console.log(`${i}) ${dateText} | ${value}`);
      date.add(1, 'd');

      data.push({ x: dateText, y: value });
    }

    console.log('===== DATA =====');
    console.log(JSON.stringify(data));
  }

  console.log('===== GENERATE =====');
  getValueByDate(150);
}

module.exports = generateLineChartData;
