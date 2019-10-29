// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let nb = A.length+1;
    let sum = (nb*(nb+1))/2;
    A.forEach(function(e){
        sum -= e;
    });
    return sum;
}
