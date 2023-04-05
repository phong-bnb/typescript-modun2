function inso(x) {
    if (x <= 1) {
        return x;
    }
    else {
        return (inso(x - 1) + inso(x - 2));
    }
}
console.log(inso(6));
