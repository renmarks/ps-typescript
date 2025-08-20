import { Point, LineType }  from "./types";
export function calculateSlope(Point1: Point, Point2: Point): number | undefined {
  if (Point1.x === Point2.x) {
    return undefined
  }
  return (Point2.y - Point1.y) / (Point2.x - Point1.x);
              
  
}

export function calculateMidpoint(Point1: Point, Point2: Point): string {
  const x = (Point1.x + Point2.x) / 2
  const y = (Point1.y + Point2.y) / 2
  return `(${x}, ${y})`;
}

export function calculateDistance(Point1: Point, Point2: Point): number {
  const deltaY = (Point2.y - Point1.y); 
  const deltaX = (Point2.x - Point1.x);
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

export function calculateLineEquation(Point1: Point, Point2: Point): string{
  const slope = calculateSlope(Point1, Point2);
  if (slope === undefined) {
    return `x = ${Point1.x}`;
  }
  const yInt = Point1.y - slope * Point1.x;
  if (slope === 0) {
    return `y = ${yInt}`;
  }

    return `y = ${slope.toFixed(2)}x + ${yInt.toFixed(2)}`;

}

export function getLineType(Point1: Point, Point2: Point): LineType {
  if (Point1.x === Point2.x) {
    return LineType.Vertical;
  }
    if (Point1.y === Point2.y) {
    return LineType.Horizontal;
  }
  return LineType.Sloped;
}







