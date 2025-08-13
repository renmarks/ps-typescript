import { SquareShape } from '../../src/SquareShape';

describe('SquareShape', () => {
  test('constructor should set the length', () => {
    const length1 = 5;
    const squareShape1 = new SquareShape(length1);
    expect(squareShape1.sideLength).toBe(length1);

    const length2 = 1;
    const squareShape2 = new SquareShape(length2);
    expect(squareShape2.sideLength).toBe(length2);
  });
});
