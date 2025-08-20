import { RoundShape } from '../../src/RoundShape';

describe('RoundShape', () => {
  test('getCircumference() should return the correct circumference', () => {
    const radius1 = 5;
    const roundShape1 = new RoundShape(radius1);
    const expectedCircumference1 = 2 * Math.PI * radius1;
    expect(roundShape1.getCircumference()).toBe(expectedCircumference1);

    const radius2 = 8;
    const roundShape2 = new RoundShape(radius2);
    const expectedCircumference2 = 2 * Math.PI * radius2;
    expect(roundShape2.getCircumference()).toBe(expectedCircumference2);
  });
});
