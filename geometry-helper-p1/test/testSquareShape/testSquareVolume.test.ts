import { SquareShape } from '../../src/SquareShape';

describe('SquareShape', () => {
  test('getVolume() should return the correct volume', () => {
    const length1 = 3;
    const squareShape1 = new SquareShape(length1);
    const expectedVolume1 = Math.pow(length1, 3);
    expect(squareShape1.getVolume()).toBe(expectedVolume1);

    const length2 = 4;
    const squareShape2 = new SquareShape(length2);
    const expectedVolume2 = Math.pow(length2, 3);
    expect(squareShape2.getVolume()).toBe(expectedVolume2);
  });
});
