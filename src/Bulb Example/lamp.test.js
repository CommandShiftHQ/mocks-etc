const { Lamp } = require('./lamp');

describe('Lamp', () => {
  describe('constructor', () => {
    it('has the given bulb', () => {
      // This use of jest.fn() is a DUMMY
      // We could technically pass anything here, but jest.fn() indicates that it's just a fake thing
      const bulb = jest.fn();
      const lamp = new Lamp(bulb);
      expect(lamp.bulb).toBe(bulb);
    });

    it('is turned off by default', () => {
      // This use of jest.fn() is also a DUMMY
      // We never even use it in the test, and don't even store it in a variable.  It's just a placeholder
      // We could technically pass anything here, but jest.fn() again indicates that it's just a fake thing
      const lamp = new Lamp(jest.fn());
      expect(lamp.isOn).toBe(false);
    });
  });

  describe('switchOn', () => {
    describe('when the bulb works', () => {
      let bulb;
      let lamp;

      beforeEach(() => {
        // For these tests, our bulb is a STUB
        // It's a simplified implementation that does only the job we need it to do, in a controlled way
        // Lamp.switchOn requires the bulb to have an isWorking property (boolean), and an electrify property (a function)
        // N.B. we are using jest.fn() as a fake function

        bulb = {
          // In these tests, we are checking how the lamp interacts with a WORKING bulb
          // so we set isWorking to true
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
        // bulb.electrify is a jest mock - jest.fn() - so we can SPY on it!
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
          // In these tests, we are checking how the lamp interacts with a BROKEN bulb
          // so we set isWorking to false
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

    it('turns the light off', () => {
      lamp.switchOff();
      expect(lamp.isOn).toBe(false);
    });
  });
});
