// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length==0) return -1;
    if(A.length==1) return 0;
    
    let B = Array.from(A);
    B.sort(function(a,b) {
        return a-b;
    });
    //console.log(B);
    let middle = B.length/2;
    let index = (middle%2==0)?middle:Math.round(middle);
    let count = 0;
    
    //console.log(middle);
    //console.log(Math.round(middle));
    //console.log(index);
    //console.log(A[index]);
    
    for(let i=0; i<B.length && count<=middle; i++) {
        if(B[index-1]==B[i]) count++;
    }
    //console.log('count:'+count);
    if(count>middle) {
        //console.log('in');
        let occurence = 0;
        while(A[occurence]!=B[index-1]) {
            //console.log(A[occurence]+' -- '+B[index-1]);
            occurence++;
        }
        //console.log('occurence:'+occurence);
        return occurence;
    }
    
    return -1;
}
