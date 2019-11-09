// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(H.length==1) return 1;
    
    let count = 0;
    let stack = [];

    for(let i=0;i<H.length;i++) {
        while(stack.length>0 && stack[stack.length-1]>H[i]) {
            count++;
            stack.pop();
        }
        
        if(stack.length==0 || H[i]>stack[stack.length-1]) {
            stack.push(H[i]);
        }
    }
    return count+stack.length;
}
