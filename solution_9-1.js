// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //if(A.length==0) return 0;
    
    let max = 0;
    let current = 0;
    
    for(let i=0; i<A.length-1; i++) {
        let diff = A[i+1]-A[i];
        current = Math.max(current+diff, diff);
        max = Math.max(current, max)
        //console.log('diff:'+diff);
        //console.log('current:'+current);
        //console.log('max:'+max);
        //console.log('-----');
    }

    return max;
}
