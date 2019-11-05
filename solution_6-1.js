function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let sorted = A.sort(function(a,b) {
        return a-b;
    });
    return Math.max(sorted[0]*sorted[1]*sorted[sorted.length-1],
        sorted[sorted.length-3]*sorted[sorted.length-2]*sorted[sorted.length-1]);
}