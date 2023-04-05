"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _2circle_1 = require("./2circle");
function distance(CircleOne, CircleTwo, d) {
    var distance = Math.pow(CircleOne.radius - CircleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var top = new _2circle_1.Circle(9);
var up = new _2circle_1.Circle(5);
console.log(distance(top, up, 24));
