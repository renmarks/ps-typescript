import { LineType } from '../../../src/2D/types';

describe('LineType Enum', () => {
  it('should have defined values for LineType enum', () => {
    expect(LineType).toBeDefined();

    expect(LineType).toHaveProperty('Horizontal', 'Horizontal');
    expect(LineType).toHaveProperty('Vertical', 'Vertical');
    expect(LineType).toHaveProperty('Sloped', 'Sloped(Diagonal)');
  });
});
