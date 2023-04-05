let number: number[] = [1,3,4,5,8,10]
let t = 0 
let arr:number[] = []
while (t<10) {
if(number.indexOf(t)==-1){
 arr.push(t)
}
t++
}
console.log(arr);
