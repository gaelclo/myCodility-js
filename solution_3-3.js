// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let total = 0;
    A.forEach(function(e){
        total += e;
    });

    let min = Number.MAX_VALUE;
    let first = 0;
    for(let i=0;i<A.length-1;i++) {
        first += A[i];
        total -= A[i];
        min = Math.min(min, Math.abs(first-total)); 
    }
    return min;
}
