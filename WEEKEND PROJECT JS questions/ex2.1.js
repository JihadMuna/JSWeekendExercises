function sumOfLowestIntegers (numbers){
numbers.sort((a,b) => a - b);  // Sort the array from smaller to bigger
return numbers[0] + numbers[1]; //return the sum of the first two numbers
}
const result1 = sumOfLowestIntegers([5,16,7,21,3]);
console.log(result1); // the output should be (5+3)=8 !! V

// try another array :
const result2 = sumOfLowestIntegers([6,20,9,15,25]);
console.log(result2); // the output should be (6+9)=15 !! V