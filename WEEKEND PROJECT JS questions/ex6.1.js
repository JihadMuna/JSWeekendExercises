function accum (str) {
    let result = '';
    for (let i=0; i<str.length; i++) {
        result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
    }
    result = result.slice(0, -1);
    return result;
}

//Examples
console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd" V
console.log(accum("RqaEzty")); // Output: "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy" V
console.log(accum("cwAt")); // Output: "C-Ww-Aaa-Tttt" V