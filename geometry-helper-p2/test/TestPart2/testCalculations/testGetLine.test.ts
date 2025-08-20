import { getLineType } from "../../../src/2D/calculations";

describe('getLineType', () => {
    it('calculate correct LineType values from given points', () => {
        const point1 = { x: 3, y: 3 };
        const point2 = { x: 5, y: 2 };
        const point3 = { x: 3, y: 6 };
        const point4 = { x: 1, y: 2};

        const correctLineType1 = "Sloped(Diagonal)";
        const correctLineType2 = "Vertical"
        const correctLineType3 = "Sloped(Diagonal)"
        const correctLineType4 = "Horizontal"

        expect(getLineType(point1,point2)).toBe(correctLineType1);
        expect(getLineType(point1,point3)).toBe(correctLineType2);
        expect(getLineType(point2,point3)).toBe(correctLineType3);
        expect(getLineType(point2,point4)).toBe(correctLineType4);
    });
});
