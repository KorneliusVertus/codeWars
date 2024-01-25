// DESCRIPTION

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION

function solution(str){
    return str.split('').reverse().join(''); // split - из strings in array; reverse - перевернуть строку; join - из array in stings
}

const result = solution('Alex');

console.log(result)