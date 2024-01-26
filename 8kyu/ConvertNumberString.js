// DESCRIPTION
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// SOLUTION -- Всё что придумал ))

function numberToString(num) {
    return num.toString();
}
console.log(typeof numberToString(123));

function numberToString(num) {
    return String(num);
}
console.log(typeof numberToString(123));

function numberToString(num) {
    return num = [num].join('')
}
console.log(typeof numberToString(123));

