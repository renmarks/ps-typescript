import { Point, LineType }  from "./types";


export function calculateSlope(p1: Point, p2: Point): number | undefined {
    if (p1.x === p2.x) {
        return undefined; // Vertical lines have undefined slope
    }

    return (p2.y - p1.y) / (p2.x - p1.x);
}

export function calculateMidpoint(p1: Point, p2: Point): string {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    return `(${midX}, ${midY})`;
}

export function calculateDistance(p1: Point, p2: Point): number {
    const deltaX = p2.x - p1.x;
    const deltaY = p2.y - p1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export function calculateLineEquation(p1: Point, p2: Point): string {
    const slope = calculateSlope(p1, p2);

    if (slope === undefined) {
        return `x = ${p1.x}`; // Vertical line
    }

    const yIntercept = p1.y - slope * p1.x;
    return slope != 0 ? `y = ${slope.toFixed(2)}x + ${yIntercept.toFixed(2)}`: `y = ${yIntercept}`;
}


export function getLineType(p1: Point, p2: Point): LineType {
    if (p1.x === p2.x) {
        return LineType.Vertical;
    }

    if (p1.y === p2.y) {
        return LineType.Horizontal;
    }

    return LineType.Sloped;
}
