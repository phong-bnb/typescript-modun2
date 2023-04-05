class Staff{
    private name:string;
    private email:string;
    private age:number;
    constructor(){
        this.name= ' phong'
        this.email='ghdfghd'
        this.age= 25

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
let sta1 = new Staff()
sta1.setAge(18)
console.log(sta1.getAge());