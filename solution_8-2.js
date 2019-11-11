// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let stack = [];
    for(let i=0;i<A.length;i++) {
        if(stack.length==0) {
            stack.push(A[i]);
        }
        else {
            if(stack[stack.length-1]!=A[i]) {
                stack.pop();
            }
            else {
                stack.push(A[i]);
            }
        }
    }
    let candidate;
    let count = 0;
    if(stack.length>0) candidate = stack.pop();
    for(let i=0;candidate!=undefined && i<A.length;i++) {
        if(A[i]==candidate) count++;
    }
    if(count<=A.length/2) return 0;
    
    //console.log('candidate:'+candidate);
    //console.log('count:'+count);
    
    let equiLeader = 0;
    let leftLeader = 0;
    let rightLeader = count;
    for(let i=0;i<A.length-1;i++) {
        //console.log('A[i]:'+A[i]);
        if(A[i]==candidate) {
            leftLeader++;
            rightLeader--;
        }
        //console.log('left:'+(i+1)/2);
        //console.log('leftLeader:'+leftLeader);
        //console.log('right:'+((A.length-i-1)/2));
        //console.log('rightLeader:'+rightLeader);
        if(((i+1)/2)<leftLeader && ((A.length-i-1)/2)<rightLeader) {
            equiLeader++;
        }
        //console.log('-------');
    }
    return equiLeader;
}
