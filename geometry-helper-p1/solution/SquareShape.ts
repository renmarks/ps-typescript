export class SquareShape {
    sideLength: number;
  
    constructor(sideLength: number) {
      this.sideLength = sideLength;
    }
  
    getArea(): number {
      return Math.pow(this.sideLength, 2);
    }
  
    getPerimeter(): number {
      return 4 * this.sideLength;
    }

    getVolume(): number {
      return Math.pow(this.sideLength, 3);
    }

    getSurfaceArea(): number {
      return 6 * Math.pow(this.sideLength, 2);
    }
}
