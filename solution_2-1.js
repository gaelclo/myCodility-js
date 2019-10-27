// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length==1) return A[0];
    
    let counted = new Map();
    A.forEach(function(e1) {
        if(counted.get(e1)) {
            counted.set(e1, counted.get(e1)+1);
        }
        else {
            counted.set(e1, 1);
        }
    });
    //console.log(counted);
    let odd = -1;
    counted.forEach(function(v, k) {
        if(v%2==1) odd = k;
    });
    return odd;
}
