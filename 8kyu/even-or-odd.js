// DESCRIPTION
// Create a function that takes an integer as an argument and returns "Even" for even numbers or 
// "Odd" for odd numbers.

// SOLUTION 

function even_or_odd(number) {
    return number % 2 === 0 ? "Odd" : "Even" // если number % 2 === 0 - true, то "Odd". Синтаксис: condition ? val1 : val2
}

console.log(even_or_odd(5));

// function myFan() {
//     let a = 2;
//         b = 3;
//     let c = a + b === 4 ? b = 5 : a = 7; // В выражениях могут быть не только строки!
//     let result = c;
//     return result
// }

// console.log(myFan()) // 7

// let [one, two, three] = foo; // MDN почему у них так? В консоле ошибка
// console.log(foo);