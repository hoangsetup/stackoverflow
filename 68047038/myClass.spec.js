const { Cat } = require('./myClass');

describe('Main tests', () => {
  beforeEach(() => {
    jest.spyOn(Cat, 'sound');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('Test Cat', () => {
    it('Meows', () => {
      // Don't mock, just call actual logic
      expect(Cat.sound()).toBe('Meow');
    });
  });

  describe('Test Dog', () => {
    it('Barks', () => {
      Cat.sound.mockReturnValue('Woof'); // mock return value of `sound()`

      expect(Cat.sound()).toBe('Woof');
    });
  });
});
