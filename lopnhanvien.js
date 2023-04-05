var Staff = /** @class */ (function () {
    function Staff() {
        this.name = ' phong';
        this.email = 'ghdfghd';
        this.age = 25;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var sta1 = new Staff();
sta1.setAge(18);
console.log(sta1.getAge());
