function basicOp (operation, value1, value2) {
switch (operation) {
   case '+':
    return value1 + value2;
    case '-':
        return value1 - value2;
        case '*':
            return value1 * value2;
            case '/':
                return value1 / value2;
                default:
                    return NaN; //if the operation was invalid
}
}
//Examples:
const result1 = basicOp('+', 4, 7);
console.log(result1); //should be 7 V

const result2 = basicOp('-', 10, 6);
console.log(result2); //should be 4 V

const result3 = basicOp('/', 45, 5);
console.log(result3); // should be 9 V

const result4 = basicOp('5', 7, 6);
console.log(result4); // should be NaN V
