// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let total = 0;
    let dt = [];
    
    for(let i=0;i<A.length;i++) {
        if(B[i]==1) {
            dt.push(A[i]);
        }
        else {
            while(dt.length>0) {
                let fish = dt.pop();
                if(fish>A[i]) {
                    dt.push(fish);
                    break;
                }
            }
            if(dt.length==0) total++;
        }
    }   
    return dt.length+total;
}
