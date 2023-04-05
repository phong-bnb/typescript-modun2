import { Circle } from "./2circle"
function distance(CircleOne:Circle,CircleTwo:Circle, d:number){
let distance = Math.pow(CircleOne.radius-CircleTwo.radius,2)+Math.pow(d,2)
 return Math.sqrt(distance)
} 
let top = new Circle(9);
let up = new Circle(5);
console.log(distance(top,up,24));