var number = [1, 3, 4, 5, 8, 10];
var t = 0;
var arr = [];
while (t < 10) {
    if (number.indexOf(t) == -1) {
        arr.push(t);
    }
    t++;
}
console.log(arr);
