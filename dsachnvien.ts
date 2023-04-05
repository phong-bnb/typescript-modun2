enum Gender{
   male,
   female,
   other,
}
class Staff{
    name:string
    gender: Gender=Gender.other
    birthday:string
    email:string
    phone:number
    constructor(name:string,gender:Gender,birthday:string,email:string,phone:number){
        this.name=name
        this.gender=gender
        this.birthday=birthday
        this.email=email
        this.phone=phone
    }
}
let Stafflist: Staff[]=[]
Stafflist.push(new Staff('phong',Gender.male,'07/08/2000','ngphong',305894569))
Stafflist.push(new Staff('duc',Gender.female,'07/08/2000','ndfghfphong',305894569))
Stafflist.push(new Staff('dfong',Gender.male,'07/08/2000','ngphong',305894569))
function Sta(Stafflist:Staff){
    console.log(Stafflist.name,Stafflist.gender,Stafflist.birthday,Stafflist.email,Stafflist.phone);

}
Stafflist.forEach(Sta)