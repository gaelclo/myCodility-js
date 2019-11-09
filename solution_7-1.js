// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(S.length%2==1) return 0;
    
    let keys = ['(','{','['];
    
    let brackets = new Map();
    brackets.set('(',')');
    brackets.set('[',']');
    brackets.set('{','}');
    
    let res = 1;
    let stack = [];
    for(let i=0;i<S.length && res==1;i++) {
        if(keys.indexOf(S[i])!=-1) {
            stack.push(S[i]);
        }
        else {
            let last = stack.pop();
            if(brackets.get(last)!=S[i]) res = 0; 
        }
    }
    if(stack.length>0) res = 0;
    return res;
}
