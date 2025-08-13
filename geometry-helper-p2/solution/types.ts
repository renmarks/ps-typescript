export enum LineType {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
    Sloped = "Sloped(Diagonal)"
}

export interface Point {
    x: number;
    y: number;
}

export function isPoint(obj: any): obj is Point {
    return (
      obj &&
      typeof obj.x === 'number' &&
      typeof obj.y === 'number' &&
      !isNaN(obj.x) &&
      !isNaN(obj.y)
    );
}
