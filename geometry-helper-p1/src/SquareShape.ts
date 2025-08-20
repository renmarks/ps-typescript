export class SquareShape {
  sideLength: number;
  constructor(length: number) {
    this.sideLength = length;
  }
  getArea(): number {
    return this.sideLength * this.sideLength;

  }
  getPerimeter(): number {
    return this.sideLength + this.sideLength + this.sideLength + this.sideLength;
  }
  getVolume(): number {
    return this.sideLength * this.sideLength * this.sideLength;
  }
  getSurfaceArea(): number {
    return 6 * (this.sideLength * this.sideLength);
  }
}
