function shortestWordsLength(str){
    const words = str.split(' '); // Split the input string into words
    let shortest = Infinity; // Initialize the shortest length with a very large number

    
  // Loop through each word to find the shortest length

for (const word of words) {
    const wordLength = word.length;
    if (wordLength < shortest) {
        shortest = wordLength;
    }
}
return shortest; // Return the shortest length
}

//Example 
console.log(shortestWordsLength("Simple, given a string of words, return the length of the shortest word(s).")); // Output: 1