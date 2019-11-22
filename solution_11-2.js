/*
function string(A) {
    console.log('------');
    A.forEach((v,k) => {
        console.log('k:'+k+', v:'+v);
    });
    console.log('------');
}
*/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //console.log();
    //console.time('start');
    let max = 0;
    
    let elements = new Map();
    elements.set(1, 0);
    
    for(let e of A) {
        if(elements.has(e)) {
            elements.set(e, elements.get(e)+1);
        }
        else {
            elements.set(e, 1);
            max = Math.max(max,e);
        }
    }
    
    let divisors = new Map();
    for(let e of A) {
        divisors.set(e, e==1?[e]:[1,e]);
    }
    
//string(elements);
    
    //let max = Math.max(...A);
    //console.log('max:'+max);
    
    for(let i=2;i*i<=max;i++) {
        //console.log('a');
        let current = i*i;
        while(current<=max) {
            //console.log('divisors.has(current):'+divisors.has(current))
            //console.log('divisors.get(current):'+divisors.get(current));
            //console.log('>> current:'+ current+ ' '+divisors.has(current));
            if(divisors.has(current) && divisors.get(current).indexOf(i)==-1) {
                //console.log('current:'+current+' i:'+i+' current/i:'+(current/i));
                let e = divisors.get(current);
                e.push(i);
                if(current/i!=i) {
                    e.push(current/i);
                }
                //console.log('=>'+e);
            }
            current+=i;
        }
    }
    
//string(divisors);
    
    let counts = [];
    for(let e of A) {
        //console.log('e:'+e);
        //console.log('elements.get(e):'+elements.get(e));
        //console.log('divisors.get(e):'+divisors.get(e));
        //console.log('divisors.get(e).map(v => elements.get(e)):'
        //                               +divisors.get(e).map(v => elements.get(v)));
        
        let count = divisors.get(e).map(v => elements.get(v)).reduce((a,b)=>b?a+b:a,0);
        //console.log('count:'+count);
        //console.log('A.length:'+A.length);
        //console.log('pushed:'+(A.length-count));
        counts.push(A.length-count);
    }
    
    //console.timeEnd('start');
    return counts;
}

Test:
[2]
[2,4]
[3,4]
