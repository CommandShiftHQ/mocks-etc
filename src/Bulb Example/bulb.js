class Bulb {
  static voltage = 120;

  constructor() {
    this.lives = 5;
    this.output = null;
  }

  get isWorking() {
    return this.lives > 0;
  }

  electrify(volts) {
    if (volts > Bulb.voltage) {
      this.lives = 0;
      this.output = 'bang!';
    } else if (volts < Bulb.voltage) {
      this.lives -= 1;
      this.output = '*shines dimly*';
    } else {
      this.lives -= 1;
      this.output = '*shiny shiny*';
    }
  }
}

exports.Bulb = Bulb;
