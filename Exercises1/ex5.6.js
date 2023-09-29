//checks if the input string has four or fewer characters and returns it unchanged
function maskify (str) {
if (str.length <=4) {
    return str;
}

//For longer strings, it replaces all characters except the last four with #
const maskedChars = str.slice(0, -4).replace(/./g, '#');
const lastFourChars = str.slice(-4);

// then combines them with the last four characters.
 return maskedChars + lastFourChars;
}

// Examples
console.log(maskify("4556364607935616")); // Output: "############5616"
console.log(maskify(     "64607935616") );      // Output: "#######5616"
console.log(maskify(               "1"));                 // Output: "1"
console.log(maskify(                ""));                  // Output: ""


// "What was the name of your first pet?"
console.log(maskify("Skippy"));            // Output: "##ippy"
console.log(maskify("Nananananananananananananananana Batman!")); // Output: "####################################man!"