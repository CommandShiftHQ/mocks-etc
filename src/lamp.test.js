const { Lamp } = require('./lamp');

describe('Lamp', () => {
  describe('constructor', () => {
    it('is turned off by default', () => {
      // This jest.fn() is a DUMMY
      // We never use it in the test, it's just a placeholder
      // We could technically pass anything here, but jest.fn() indicates that it's just a fake thing
      const lamp = new Lamp(jest.fn());

      expect(lamp.isOn).toBe(false);
    });
  });

  describe('switchOn', () => {
    describe('when the bulb works', () => {
      let bulb;
      let lamp;

      beforeEach(() => {
        // bulb here is a STUB
        // It's a simplified implementation that does only the job we need it to do, in a controlled way
        // We need it to have an isWorking property, and an applyCurrent function
        // N.B. we are using jest.fn() as a fake function

        bulb = {
          isWorking: true,
          electrify: jest.fn(),
        };

        // Initialize the lamp with our fake bulb
        lamp = new Lamp(bulb);
      });

      it('turns the light on', () => {
        lamp.switchOn();

        expect(lamp.isOn).toBe(true);
      });

      it('sends the correct voltage to the bulb', () => {
        lamp.switchOn();

        expect(bulb.electrify).toHaveBeenCalledWith(120);
      });
    });

    describe('when the bulb is broken', () => {
      let bulb;
      let lamp;

      beforeEach(() => {
        // bulb here is a STUB
        // It's a simplified implementation that does only the job we need it to do, in a controlled way
        // We need it to have an isWorking property

        bulb = {
          isWorking: false,
          electrify: jest.fn(),
        };

        // Initialize the lamp with our fake bulb
        lamp = new Lamp(bulb);
      });

      it('does not turn the light on', () => {
        // In this test bulb.electrify acts as a DUMMY
        // we don't make an assertion about it, it's just there as a placeholder
        lamp.switchOn();

        expect(lamp.isOn).toBe(false);
      });

      it('does not send any voltage to the bulb', () => {
        // In this test bulb.electrify acts as a SPY
        // we make an assertion about how the function was used by the lamp
        lamp.switchOn();

        expect(bulb.electrify).not.toHaveBeenCalled();
      });
    });
  });

  describe('switchOff', () => {
    let bulb;
    let lamp;

    beforeEach(() => {
      bulb = {
        isWorking: true,
        electrify: jest.fn(),
      };

      lamp = new Lamp(bulb);

      lamp.switchOn();
    });

    it('turns the light on', () => {
      lamp.switchOff();

      expect(lamp.isOn).toBe(false);
    });
  });
});
