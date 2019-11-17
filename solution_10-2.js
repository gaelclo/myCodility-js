// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let i = 1;
    let minp = 0;
    while(i*i<=N) {
        if(N%i==0) {
            let p = 2*(i+N/i);
            //console.log('i:'+i+' p:'+p);
            minp = minp==0?p:Math.min(p, minp);
        }
        i++;
    }
    return minp
}
