// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(S.length%2==1) return 0;
    
    let stack = [];
    for(let i=0; i<S.length; i++) {
        if("("==S[i]) {
            stack.push(S[i]);
        }
        else {
            if(stack.length==0) {
                return 0;
            }
            else {
                stack.pop();
            }
        }
    }
    return stack.length>0?0:1;
}
