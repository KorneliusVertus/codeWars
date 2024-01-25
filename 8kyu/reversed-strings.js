// DESCRIPTION

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION

function solution(str){
    return str.split('').reverse().join(''); 
}

const result = solution('Alex');

console.log(result)