class Bulb {
  static voltage = 120;

  constructor() {
    this.lives = 5;
  }

  get isWorking() {
    return this.lives > 0;
  }

  electrify(volts) {
    if (volts > Bulb.voltage) {
      this.lives = 0;
      console.log('bang!');
    } else if (volts < Bulb.voltage) {
      this.lives -= 1;
      console.log('*shines dimly*');
    } else {
      this.lives -= 1;
      console.log('*shiny shiny*');
    }
  }
}

exports.Bulb = Bulb;