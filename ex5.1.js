//1. check if string has at east 2 characters
//2. use slice to remove the first and the last characters
//3.     // Handle strings with less than two characters

function removeFirstAndLastCharacters (str) {
if (str.length >= 2) {
    return str.slice(1, -1);
}else {
    return "String is smaller than 2 characters";
}
}

//trying Examples

const result1 = removeFirstAndLastCharacters("Jihad");
console.log(result1);

const result2 = removeFirstAndLastCharacters("Yishai");
console.log(result2);