// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length==0) return 0;
    
    let res = 0;
    let sorted = A.sort(function(a,b) {
        return a-b;
    });
    for(let i=A.length-1;i>=2 && res==0;i--) {
        if(A[i-2]+A[i-1]>A[i]) res++;
    }
    return res;
}
