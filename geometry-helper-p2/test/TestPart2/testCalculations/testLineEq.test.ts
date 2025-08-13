import { calculateLineEquation } from "../../../src/2D/calculations";

describe('calculateLineEquation', () => {
    it('calculate correct LineEquation values from given points', () => {
        const point1 = { x: 1, y: 4 };
        const point2 = { x: 5, y: 7 };
        const point3 = { x: 1, y: 8 };
        const point4 = { x: 7, y: 7};

        const correctLineEquation1 = "y = 0.75x + 3.25";
        const correctLineEquation2 = "x = 1"
        const correctLineEquation3 = "y = -0.25x + 8.25"
        const correctLineEquation4 = "y = 7"

        expect(calculateLineEquation(point1,point2)).toBe(correctLineEquation1);
        expect(calculateLineEquation(point1,point3)).toBe(correctLineEquation2);
        expect(calculateLineEquation(point2,point3)).toBe(correctLineEquation3);
        expect(calculateLineEquation(point2,point4)).toBe(correctLineEquation4);
    });
});
