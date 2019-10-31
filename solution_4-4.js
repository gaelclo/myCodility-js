// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    
    let sorted = Array.from(new Set(A.filter(v => v>0))).sort(function(a,b) {
        return a-b;
    });
    let missing = 1;
    let found = false;
    
    if(sorted.length==0) {
        found = true;
    }
    
    for(let i=0;i<sorted.length && !found;i++) {
        if(sorted[i]>missing) {
            found = true;
        }
        else {
            missing++;
        }
    }
    return missing;
}
