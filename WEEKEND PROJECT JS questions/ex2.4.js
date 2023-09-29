// 1.sort the array
// 2.// Check if the first element is equal to the second element;
// if it is, the unique number is the last element,
//otherwise, it's the first element.

function findUniq (arr) {
arr.sort ((a,b) => a - b);

if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
}else {
    return arr[0];
}
}

// trying examples;
const result1 = findUniq([1, 1, 1, 2, 1, 1]);
console.log(result1); // output should be 2 V

const result2 = findUniq([0, 0, 0.55, 0, 0]);
console.log(result2); // output should be 0.55 V

