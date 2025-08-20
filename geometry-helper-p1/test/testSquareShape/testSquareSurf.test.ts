import { SquareShape } from '../../src/SquareShape';

describe('SquareShape', () => {
  test('getSurfaceArea() should return the correct surface area', () => {
    const length1 = 6;
    const squareShape1 = new SquareShape(length1);
    const expectedSurfaceArea1 = 6 * Math.pow(length1, 2);
    expect(squareShape1.getSurfaceArea()).toBe(expectedSurfaceArea1);

    const length2 = 7;
    const squareShape2 = new SquareShape(length2);
    const expectedSurfaceArea2 = 6 * Math.pow(length2, 2);
    expect(squareShape2.getSurfaceArea()).toBe(expectedSurfaceArea2);
  });
});
