// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let peaks = [];
    
    for(let i=1;i<A.length-1;i++) {
        if(A[i-1]<A[i] && A[i]>A[i+1]) peaks.push(i);
    }
    
    if(peaks.length==0) return 0;
    
    for(let k=peaks.length; k>0;k--) {
        
        if(A.length%k==0) {
            let blockSize = A.length/k;
            let count = new Set();
            for(let p of peaks) {
                count.add(Math.floor(p/blockSize));
            }
            if(count.size==k) return k;
        }
    }
    return 0;
}
//console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));