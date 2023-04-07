"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    Book.prototype.getID = function (ID) {
        return this.ID;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getName = function (name) {
        return this.getName;
    };
    return Book;
}());
exports.Book = Book;
