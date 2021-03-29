class Lottery {
  constructor(numberGenerator) {
    this.numberGenerator = numberGenerator;
  }

  pickNumbers() {
    let numbers = [];

    for (let i = 0; i < 6; i += 1) {
      numbers.push(this.numberGenerator.random());
    }

    return numbers;
  }
}

exports.Lottery = Lottery;
