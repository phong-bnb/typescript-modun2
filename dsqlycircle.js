var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var clrclelist = [];
clrclelist.push(new Circle(4, 'red'));
clrclelist.push(new Circle(7, 'blue'));
function circle(clrclelist) {
    console.log(clrclelist.radius + clrclelist.color);
}
clrclelist.forEach(circle);
// in hết các hình tròn trong class 
