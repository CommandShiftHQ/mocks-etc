const { Lottery } = require('./lottery-class');

describe('Lottery', () => {
  describe('pickNumbers', () => {
    it('generates six random numbers and returns them', () => {
      // Create a fake generator, which has a random property that we can use as a MOCK
      const generator = {
        random: jest.fn(),
      };

      // We can program generator.random to return a fixed value - this is MOCKING
      generator.random.mockReturnValue(1);

      const lottery = new Lottery(generator);

      const result = lottery.pickNumbers();

      expect(result).toEqual([1, 1, 1, 1, 1, 1]);
    });
  });
});
