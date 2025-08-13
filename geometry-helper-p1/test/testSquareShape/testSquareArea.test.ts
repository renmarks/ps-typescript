import { SquareShape } from '../../src/SquareShape';

describe('SquareShape', () => {
  test('getArea() should return the correct area', () => {
    const length1 = 2;
    const squareShape1 = new SquareShape(length1);
    const expectedArea1 = Math.pow(length1, 2);
    expect(squareShape1.getArea()).toBe(expectedArea1);

    const length2 = 5;
    const squareShape2 = new SquareShape(length2);
    const expectedArea2 = Math.pow(length2, 2);
    expect(squareShape2.getArea()).toBe(expectedArea2);
  });

});
