// 1. calculate the square root
// 2. check if the square root is an integer
// 3. Increment the square and return its square
// 4. if it's not a perfect square, return -1;

function findNextSquare(number) {
  const numberRoot = Math.sqrt(number);

  if (Number.isInteger(numberRoot)) {
    const nextSquare = Math.pow(numberRoot + 1, 2);
    return nextSquare;
  } else {
    return -1;
  }
}
// Trying some Numbers :
const result = findNextSquare(121);
console.log(result); // should be 144 >> V

const result2 = findNextSquare(625);
console.log(result2); // should be 676 >> V

const result3 = findNextSquare(114);
console.log(result3); // should be -1 >> V
