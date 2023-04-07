export class Circle {
    radius: number
    color: string
    constructor(radius: number, color: string) {
        this.radius = radius
        this.color = color
    }
    getRadius() {
        return this.radius
    }
    setRadius(radius: number) {
        this.radius = radius
    }
    getColor() {
        return this.color
    }
    setColor(color: string) {
        this.color = color
    }
    getArea() {
        return 2 * this.radius * Math.PI
    }
    getPerimeter() {
        return this.radius * this.radius * Math.PI
    }
}