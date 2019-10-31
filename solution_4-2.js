// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let count = [];
    A.forEach(function(e,i){
        if(count[e]==undefined) count[e] = i;
    });
    let time = -1;
    let unable = false;
    for(let i=1;i<=X && !unable;i++) {
        if(count[i]!=undefined) {
            time = Math.max(time, count[i]);
        }
        else {
            unable = true;
            time = -1;
        }
    }
    
    return time;
}