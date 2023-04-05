function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  function printFibonacci(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
     sum += fibonacci(i);
    }
    return sum
  }
  
  console.log(printFibonacci(10));
  