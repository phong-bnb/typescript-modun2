class User {
    name:string
    email:string
    role:number
    constructor(name:string,email:string,role:number) {
        this.name=name
        this.email=email
        this.role=role
        
    }
    getInfo(){
        console.log(this.name);
        console.log(this.email);
        console.log(this.role);
    }
    isAdmin(role: number){
      if(role==1){
        console.log("là admin");
      } else{
        console.log("là người dùng bình thường");
      }
      
    }
    setName(name: string){
 this.name = name
    }
    setMail(email:string){
        this.email=email
    }
    setRole(role:number){
        this.role=role
    }
     
}
let emiuducanh = new User('phong','ngutho',1)
let thf = new User('phong','theew',2)
emiuducanh.isAdmin(emiuducanh.role)
emiuducanh.getInfo()