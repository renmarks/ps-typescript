import { RoundShape } from '../../src/RoundShape';

describe('RoundShape', () => {
  test('getVolume() should return the correct volume', () => {
    const radius1 = 6;
    const roundShape1 = new RoundShape(radius1);
    const expectedVolume1 = (4 / 3) * Math.PI * Math.pow(radius1, 3);
    expect(roundShape1.getVolume()).toBe(expectedVolume1);

    const radius2 = 10;
    const roundShape2 = new RoundShape(radius2);
    const expectedVolume2 = (4 / 3) * Math.PI * Math.pow(radius2, 3);
    expect(roundShape2.getVolume()).toBe(expectedVolume2);
  });

});
