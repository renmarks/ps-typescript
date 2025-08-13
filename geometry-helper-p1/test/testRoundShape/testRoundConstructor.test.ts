import { RoundShape } from '../../src/RoundShape';

describe('RoundShape', () => {
  test('constructor should set the radius', () => {
    const radius1 = 2;
    const roundShape1 = new RoundShape(radius1);
    expect(roundShape1.radius).toBe(radius1);

    const radius2 = 5;
    const roundShape2 = new RoundShape(radius2);
    expect(roundShape2.radius).toBe(radius2);
  });
});
