import { SquareShape } from '../../src/SquareShape';

describe('SquareShape', () => {
  test('getPerimeter() should return the correct perimeter', () => {
    const length1 = 2;
    const squareShape1 = new SquareShape(length1);
    const expectedPerimeter1 = 4 * length1;
    expect(squareShape1.getPerimeter()).toBe(expectedPerimeter1);

    const length2 = 10;
    const squareShape2 = new SquareShape(length2);
    const expectedPerimeter2 = 4 * length2;
    expect(squareShape2.getPerimeter()).toBe(expectedPerimeter2);
  });
});
