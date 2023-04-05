class Circle {
radius:number
color:string
constructor(radius:number,color:string){
    this.radius=radius
    this.color=color
}    
}
let clrclelist: Circle[] = []
clrclelist.push(new Circle(4,'red'))
clrclelist.push(new Circle(7,'blue'))
function circle(clrclelist:Circle){
    console.log(clrclelist.radius+clrclelist.color);
}
clrclelist.forEach(circle)
// in hết các hình tròn trong class 