function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let pSum = new Array(A.length);
    pSum[0] = 0;
    
    for(let i=1;i<A.length;i++) {
        pSum[i] = A[i] + pSum[i-1];            
    }

    let pairs = 0;
    for(let i=0;i<A.length && pairs<=1000000000;i++) {
        if(A[i]==0) {
            pairs += pSum[A.length-1]-pSum[i];
        }
    }
    return pairs>1000000000?-1:pairs;
}