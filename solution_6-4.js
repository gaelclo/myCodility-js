// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let events = [];
    
    A.forEach(function(e,i) {
        events.push([i-e,-1]);
        events.push([i+e,1]);
    });
    
    events.sort(function(a,b){
        return a[0]-b[0] || a[1]-b[1];
    });
    
    //console.log(events);
    
    let distinct = 0;
    let opened = 0;
    for(let i=0;i<events.length && distinct!=-1;i++) {
        if(events[i][1]==-1) {
            distinct += opened;
            opened++;
        }
        else {
            opened--;
        }
        if(distinct>10000000) distinct = -1;
    }
    
    return distinct;
}
