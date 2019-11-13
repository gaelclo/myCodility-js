// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let current = 0;
    let max;
    
    for (const e of A) {
        //console.log(e);
        current = Math.max(e, current+e);
        max = (max==undefined)?current:Math.max(current, max);
        //console.log(current);
        //console.log(max);
    }
    
    return max;
}
