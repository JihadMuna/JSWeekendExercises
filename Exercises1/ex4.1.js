function fibonacciRecursive (n) {
    if (n <= 1){
        return n;
    } else return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2);
       
    }

    //trying Examples :
    const result1 = fibonacciRecursive(10);
    console.log(result1);
