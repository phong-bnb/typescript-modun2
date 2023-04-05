var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, birthday, email, phone) {
        this.gender = Gender.other;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
var Stafflist = [];
Stafflist.push(new Staff('phong', Gender.male, '07/08/2000', 'ngphong', 305894569));
Stafflist.push(new Staff('duc', Gender.female, '07/08/2000', 'ndfghfphong', 305894569));
Stafflist.push(new Staff('dfong', Gender.male, '07/08/2000', 'ngphong', 305894569));
function Sta(Stafflist) {
    console.log(Stafflist.name, Stafflist.gender, Stafflist.birthday, Stafflist.email, Stafflist.phone);
}
Stafflist.forEach(Sta);
