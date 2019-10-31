// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sorted = A.sort(function(a, b) {
        return a-b;
    });
    console.log|(sorted);
    let permutation = 1
    for(let i=0;i<sorted.length && permutation==1;i++) {
        if(sorted[i]!=i+1) permutation = 0;   
    }
    return permutation;
}