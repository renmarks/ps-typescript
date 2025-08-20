import { calculateSlope } from "../../../src/2D/calculations";

describe('calculateSlope', () => {
    it('calculate correct slope values from given points', () => {
        const point1 = { x: 3, y: 7 };
        const point2 = { x: 2, y: 4 };
        const point3 = { x: 3, y: 10 };
        const point4 = { x: 7, y: 4};

        const correctSlope1 = (point2.y - point1.y) / (point2.x - point1.x);
        const correctSlope2 = (point4.y - point1.y) / (point4.x - point1.x);

        expect(calculateSlope(point1, point2)).toBe(correctSlope1);
        expect(calculateSlope(point1, point4)).toBe(correctSlope2);
        expect(calculateSlope(point1, point3)).toBe(undefined);
        expect(calculateSlope(point2, point4)).toBe(0);
    });
});
