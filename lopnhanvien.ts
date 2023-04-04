class Staff{
    name:string;
    email:string;
    age:number;
    constructor(name:string,email:string,age:number){
        this.name=name
        this.email=email
        this.age=age

    }
    getName(){
 return this.name
    }
    setName(name:string){
       this.name = name 
    }
    getEmail(){
return this.email
    }
    setEmail(email: string){
        this.email = email
    }
    getAge(){
return this.age
    }
    setAge(age:number){
     this.age = age
    }
}
let sta1 = new Staff('Phong','ngphong.0708@gmail.com',25)
console.log(sta1);