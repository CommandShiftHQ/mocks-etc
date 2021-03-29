const { Lottery } = require('./src/lottery-class');

const generator = {
  random: () => Math.ceil(Math.random() * 49),
};

const lottery = new Lottery(generator);

const numbers = lottery.pickNumbers();

console.log(numbers);
