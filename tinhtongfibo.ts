function Inso(x){
if(x<=1){
return x 
} else{
return (Inso(x-1)+Inso(x-2))
}  
}
console.log(Inso(6));
function Tong(x){
  let sum = 0 
  for(let i = 0 ; i<x; i++ ){
    sum+=Inso(i)
  }
return sum
}
console.log(Tong(10));