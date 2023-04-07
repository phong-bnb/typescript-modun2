import { Circle } from "./Circle";
class Cylinder extends Circle{
    radius: number
    color: string
    height:number
    constructor(radius: number, color: string,height:number){
        super(radius,color)
        this.height=height
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
    getHeight(height:number){
        return this.height
    }
    setHeight(){
        this.height=this.height
    }
};