import { calculateDistance } from "../../../src/2D/calculations";

describe('calculateDistance', () => {
    it('calculate correct distance values from given points', () => {
        const point1 = { x: 12, y: 3 };
        const point2 = { x: 5, y: 2 };
        const point3 = { x: 3, y: 6 };
        const point4 = { x: 1, y: 4};

        const correctDist1 = Math.sqrt((point2.x-point1.x)**2 + (point2.y-point1.y)**2);
        const correctDist2 = Math.sqrt((point3.x-point1.x)**2 + (point3.y-point1.y)**2);
        const correctDist3 = Math.sqrt((point3.x-point2.x)**2 + (point3.y-point2.y)**2);
        const correctDist4 = Math.sqrt((point4.x-point3.x)**2 + (point4.y-point3.y)**2);

        expect(calculateDistance(point1,point2)).toBe(correctDist1);
        expect(calculateDistance(point1,point3)).toBe(correctDist2);
        expect(calculateDistance(point2,point3)).toBe(correctDist3);
        expect(calculateDistance(point3,point4)).toBe(correctDist4);
    });
});
