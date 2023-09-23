// 1. split the text by dash or underscore
// 2. upper case the first character from each word

function toCamelCase (str){
    const words = str.split(/[-_]/);
    for (let i = 1; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); //upper case the first character from each word
    }
    return words.join('');
}

//trying examples
const result1 = toCamelCase("the-stealth-warrior");
console.log(result1);

const result2 = toCamelCase("The_Stealth_Warrior");
console.log(result2);