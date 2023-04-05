"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qlysachdoc_1 = require("./qlysachdoc");
var star = [];
function sta(booklist) {
    console.log(booklist.title, booklist.author, booklist.alreadyRead);
}
star.push(new qlysachdoc_1.Booklist('đắc nhân tâm', 'gia phong', true));
star.push(new qlysachdoc_1.Booklist('không học là ngu', 'gia phong', false));
star.forEach(sta);
