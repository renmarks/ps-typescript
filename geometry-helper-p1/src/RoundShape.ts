export class RoundShape {
  radius: number
  constructor(length: number) {
    this.radius = length;
  }
  getArea(): number {
    return Math.PI * (this.radius * this.radius);

  }
  getCircumference(): number {
    return 2 * Math.PI * this.radius;  
  }
  getVolume(): number {
    return (4 / 3 ) * Math.PI * Math.pow(this.radius, 3);
  }
  getSurfaceArea(): number {
    return 4 * Math.PI * Math.pow(this.radius, 2);
  }
}
