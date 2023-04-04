var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
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
var sta1 = new Staff('Phong', 'ngphong.0708@gmail.com', 25);
console.log(sta1);
