// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let minNucleotides = new Array(P.length);
    for(let i=0;i<P.length;i++) {
        let seq = S.substring(P[i],Q[i]+1);
        if(seq.indexOf("A")!=-1) minNucleotides[i]=1;
        else if(seq.indexOf("C")!=-1) minNucleotides[i]=2;
        else if(seq.indexOf("G")!=-1) minNucleotides[i]=3;
        else if(seq.indexOf("T")!=-1) minNucleotides[i]=4;
    }
    return minNucleotides;
}
