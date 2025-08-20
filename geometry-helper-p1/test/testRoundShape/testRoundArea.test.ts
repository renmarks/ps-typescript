import { RoundShape } from '../../src/RoundShape';

describe('RoundShape', () => {
  test('getArea() should return the correct area', () => {
    const radius1 = 5;
    const radius2 = 3

    const roundShape1 = new RoundShape(radius1);
    const roundShape2 = new RoundShape(radius2);

    const expectedArea1 = Math.PI * radius1 * radius1;
    const expectedArea2 = Math.PI * radius2 * radius2;

    expect(roundShape1.getArea()).toBe(expectedArea1);
    expect(roundShape2.getArea()).toBe(expectedArea2);
  });
});
