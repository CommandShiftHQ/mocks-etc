class Lamp {
  constructor(bulb) {
    this.bulb = bulb;
    this.isOn = false;
  }

  switchOn() {
    if (this.isOn === false && this.bulb.isWorking) {
      this.isOn = true;
      this.bulb.electrify(120);
    }
  }

  switchOff() {
    this.isOn = false;
  }
}

exports.Lamp = Lamp;
