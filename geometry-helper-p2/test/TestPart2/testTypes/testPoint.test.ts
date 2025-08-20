import { Point } from '../../../src/2D/types';
import fs from 'fs';

describe('Point Interface', () => {
    it('should have the Point interface defined', () => {
        const fileContents = fs.readFileSync("./src/2D/types.ts", 'utf-8');

        const specificLine = 'export interface Point';

        expect(fileContents).toContain(specificLine);

        const point: Point = { x: 5, y: 10 };
        expect(point).toHaveProperty('x', 5);
        expect(point).toHaveProperty('y', 10);
    });
});
