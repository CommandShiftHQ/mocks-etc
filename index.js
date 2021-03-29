const { Lamp } = require('./src/lamp');
const { Bulb } = require('./src/bulb');
// const { ChristmasBulb } = require('./src/christmas-bulb');

const bulb = new Bulb();
// const bulb = new ChristmasBulb();
const lamp = new Lamp(bulb);

for (let i = 0; i < 15; i += 1) {
  lamp.switchOn();
  lamp.switchOff();
}
