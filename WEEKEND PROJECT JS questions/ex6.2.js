function countNumberOfDuplicates (text) {
const charCount = {};
let count = 0;
text = text.toLowerCase();

for (const char of text) {
    if (char.match(/[a-z0-9]/)) {
        if (charCount[char]) {
            if (charCount[char] === 1) {
                count++;
            }
            charCount[char]++;
        }else {
            charCount[char] = 1;
        }
    }
}

return count;
}

//Examples 
console.log(countNumberOfDuplicates("abcde")); // output 0 V
console.log(countNumberOfDuplicates("aabbcde")); // output 2 V
console.log(countNumberOfDuplicates("aabBcde")); //output 2 VS