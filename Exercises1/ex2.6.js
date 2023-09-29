function centuryFromYear (year) {
    return Math.ceil(year / 100);
}

// Examples:
const result1 = centuryFromYear(1750);
console.log(result1); // should be 18 V

const result2 = centuryFromYear(1900);
console.log(result2); // should be 19 V

const result3 = centuryFromYear(1601);
console.log(result3); // should be 17

const result4 = centuryFromYear(2000);
console.log(result4); // should be 20