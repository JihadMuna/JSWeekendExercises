// I Need :
//1. to splits the input name into two words
//2. extracts the first character of each word
//3. combines them with a dot in between,
//4. then converts it to uppercase.

function abbreviateName(name) {
    const [firstName, lastName] = name.split(' '); //splits the input name into two words
    const initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`; //extracts the first character of each word and combines them with a dot in between.
    return initials.toUpperCase(); //converts it to uppercase.
}

//trying Examples :
console.log(abbreviateName("Sam Harris")); // output S.H V

console.log(abbreviateName("Jihad Muna")); // output J.M V



