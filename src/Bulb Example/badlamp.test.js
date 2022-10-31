const { Lamp } = require('./lamp');
const { Bulb } = require('./bulb');
const { ChristmasBulb } = require('./christmas-bulb');

describe('Lamp', () => {
  describe('constructor', () => {
    it('has the given bulb', () => {
      const bulb = new Bulb()
      const lamp = new Lamp(bulb);
      expect(lamp.bulb).toBe(bulb);
    });

    it('is turned off by default', () => {
      const bulb = new Bulb();
      const lamp = new Lamp(bulb);
      expect(lamp.isOn).toBe(false);
    });
  });

  describe('switchOn', () => {
    describe('when the bulb works', () => {
      let bulb;
      let lamp;

      beforeEach(() => {
        bulb = new Bulb();
        lamp = new Lamp(bulb);
      });

      it('turns the light on', () => {
        lamp.switchOn();
        expect(lamp.isOn).toBe(true);
      });

      it('sends the correct voltage to the bulb', () => {
        lamp.switchOn();
        expect(bulb.output).toBe("*shiny shiny*");
      });
    });

    describe('when the bulb is broken', () => {
      let bulb;
      let lamp;

      beforeEach(() => {
        bulb = new Bulb();
        bulb.lives = 0;
        lamp = new Lamp(bulb);
      });

      it('does not turn the light on', () => {
        lamp.switchOn();
        expect(lamp.isOn).toBe(false);
      });

      it('does not send any voltage to the bulb', () => {
        lamp.switchOn();
        expect(bulb.output).toBeNull();
      });
    });
  });

  describe('switchOff', () => {
    let bulb;
    let lamp;

    beforeEach(() => {
      bulb = new Bulb();
      lamp = new Lamp(bulb);
      lamp.switchOn();
    });

    it('turns the light off', () => {
      lamp.switchOff();
      expect(lamp.isOn).toBe(false);
    });
  });
});
