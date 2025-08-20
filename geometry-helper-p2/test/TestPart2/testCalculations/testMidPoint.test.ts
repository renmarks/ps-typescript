import { calculateMidpoint } from "../../../src/2D/calculations";

describe('calculateMidPoint', () => {
    it('calculate correct midpoint values from given points', () => {
        const point1 = { x: 1, y: 4 };
        const point2 = { x: 4, y: 12 };
        const point3 = { x: 3, y: 8 };
        const point4 = { x: 2, y: 3};

        const correctMid1 = `(${(point1.x + point2.x) / 2}, ${(point1.y + point2.y) / 2})`;
        const correctMid2 = `(${(point1.x + point3.x) / 2}, ${(point1.y + point3.y) / 2})`;
        const correctMid3 = `(${(point2.x + point3.x) / 2}, ${(point2.y + point3.y) / 2})`;
        const correctMid4 = `(${(point3.x + point4.x) / 2}, ${(point3.y + point4.y) / 2})`;

        expect(calculateMidpoint(point1,point2)).toBe(correctMid1);
        expect(calculateMidpoint(point1,point3)).toBe(correctMid2);
        expect(calculateMidpoint(point2,point3)).toBe(correctMid3);
        expect(calculateMidpoint(point3,point4)).toBe(correctMid4);
    });
});
