function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return (new Set(A)).size;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(A.length==0) return 0;
    let sorted = A.sort(function(a,b) {
        return a-b;
    });
    
    let dist = 1;
    for(let i=1;i<A.length;i++) {
        if(A[i]!=A[i-1]) dist++;
    }
    return dist;
}