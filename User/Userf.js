var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        console.log(this.name);
        console.log(this.email);
        console.log(this.role);
    };
    User.prototype.isAdmin = function (role) {
        if (role == 1) {
            console.log("là admin");
        }
        else {
            console.log("là người dùng bình thường");
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setMail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
var emiuducanh = new User('phong', 'ngutho', 1);
var thf = new User('phong', 'theew', 2);
emiuducanh.isAdmin(emiuducanh.role);
emiuducanh.getInfo();
