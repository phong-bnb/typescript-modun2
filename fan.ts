class Fan{
    speed : number;
    radius: number;
    on : boolean = false;
    color : string = 'blue';
    constructor(speed: number,radius: number,on=false){
        this.speed = speed;
        this.radius = radius
        this.on=false
    }
    toString(){
        if(this.on){
            console.log(this.speed);
            console.log(this.radius);
            console.log(this.color); 
            console.log("Bật rồi");
        } else{
            console.log(this.speed);
            console.log(this.radius);
            console.log(this.color); 
            console.log("Tắt rồi");
        }
        
        console.log(this.on);
    }

}
let fan1 = new Fan(1,2,true)
let fan2 = new Fan(3,10,false)
console.log(fan1.toString());
console.log(fan2.toString());