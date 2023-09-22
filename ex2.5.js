// 1. make a function which find the summation for all numbers from 1 to num.

function summation(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum +=i;
    }
return sum;
}

// try some examples:
const result1 = summation(2);
console.log(result1); // should be 3 V

const result2 = summation(8);
console.log(result2); // should be 36 V