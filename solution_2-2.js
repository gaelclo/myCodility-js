// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length<2) return A;
    
    let output = [];
    
    A.forEach(function(e, i) {
        output[(i+K)%A.length] =  e;
    });
    return output;
}
