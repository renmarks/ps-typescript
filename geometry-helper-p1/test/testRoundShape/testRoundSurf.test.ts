import { RoundShape } from '../../src/RoundShape';

describe('RoundShape', () => {
  test('getSurfaceArea() should return the correct surface area', () => {
    const radius1 = 1;
    const roundShape1 = new RoundShape(radius1);
    const expectedSurfaceArea1 = 4 * Math.PI * Math.pow(radius1, 2);
    expect(roundShape1.getSurfaceArea()).toBe(expectedSurfaceArea1);

    const radius2 = 4;
    const roundShape2 = new RoundShape(radius2);
    const expectedSurfaceArea2 = 4 * Math.PI * Math.pow(radius2, 2);
    expect(roundShape2.getSurfaceArea()).toBe(expectedSurfaceArea2);
  });
});
