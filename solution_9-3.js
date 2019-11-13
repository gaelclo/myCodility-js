// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
   // console.log();
    if(A.length < 4) return 0;
    
    let currentSliceS = 0;
    let maxSliceS = [0];
    
    for(let i=1;i<A.length-2;i++) {
        currentSliceS = Math.max(0,currentSliceS+A[i]);
        maxSliceS[i] = currentSliceS;
    }
    
    //console.log('S:'+maxSliceS);
    let currentSliceE = 0;
    let maxSliceE = [];
    maxSliceE[A.length-1] = 0;
    for(let i=A.length-2;i>1;i--) {
        currentSliceE = Math.max(0,currentSliceE+A[i]);
        maxSliceE[i] = currentSliceE;
    }
    
    //console.log('E:'+maxSliceE);
    let max;
    for(let y=1;y<=A.length-2;y++) {
        //console.log('y:'+y);
        //console.log(maxSliceS[y-1]);
        //console.log(maxSliceE[y+1]);
        //console.log();
        if(max==undefined) {
            max = maxSliceS[y-1]+maxSliceE[y+1];
        }
        else {
            max = Math.max(max, maxSliceS[y-1]+maxSliceE[y+1]);
        }
    }
    //console.log(max);
    return max;
}
[5, 17, 0, 3] = 17
[0, 10, -5, -2, 0] = 10
[6, 1, 5, 6, 4, 2, 9, 4] = 26
