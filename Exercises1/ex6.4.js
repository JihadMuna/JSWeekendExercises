function isIsogram (str) {
    const lowerCaseStr = str.toLowerCase(); // convert the string to lowercase
    const charSet = new Set();
    for (const char of lowerCaseStr) {
        if (char.match(/[a-z]/)) {
            if (charSet.has(char)) {
                return false; // If a character repeats, it's not an isogram
            }
            charSet.add(char);
        }
    }
    return true; // If no repeating characters are found, it's an isogram
}

// Examples
console.log(isIsogram("Dermatoglyphics")); // Output: true
console.log(isIsogram("aba")); // Output: false
console.log(isIsogram("moOse")); // Output: false