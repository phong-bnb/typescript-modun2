"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookmanager = void 0;
var Bookmanager = /** @class */ (function () {
    function Bookmanager() {
        this.books = [];
    }
    Bookmanager.prototype.add = function (book) {
        this.books.push(book);
    };
    Bookmanager.prototype.getList = function () {
        return this.books;
    };
    Bookmanager.prototype.findBook = function (ID) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.ID === ID) {
                i = index;
            }
        });
        return i;
    };
    Bookmanager.prototype.delete = function (ID) {
        var indexBookdelete = this.findBook(ID);
        if (indexBookdelete !== -1) {
            this.books.splice(indexBookdelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    Bookmanager.prototype.update = function (ID, name) {
        var indexBookUpdate = this.findBook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    return Bookmanager;
}());
exports.Bookmanager = Bookmanager;
