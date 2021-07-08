import add from './index';

describe("Add", () => {
    // Jest also allows a test to run multiple
    // times using different values
    test.each([[1, 1, 2], [-1, 1, 0], [3, 2, 6]])(
    'Does %i + %i equals %i', (a, b, expectedResult) => {
      expect(add(a, b)).toBe(expectedResult);
    });
  });