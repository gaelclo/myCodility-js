// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let pSum = new Array(A.length);
    pSum[0] = 0;
    
    A.forEach(function(e,i) {
        pSum[i+1] = pSum[i]+e;    
    });
    
    let min = Number.MAX_VALUE;
    let position = -1
    for(let i=0;i<pSum.length-2;i++) {
        
        let avg = (pSum[i+2]-pSum[i])/2;
        if(i+3<pSum.length) {
            avg = Math.min(avg, (pSum[i+3]-pSum[i])/3);
        }
        
        if(avg<min) {
            min = avg;
            position = i;
        }
    }
    return position;
}