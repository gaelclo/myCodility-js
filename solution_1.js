// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var binaryN = N.toString(2)
    var gap = 0;
    if(binaryN) {
        var currentGap = -1;
        //console.log(binaryN)
        binaryN.split('').forEach(function(b){
            //console.log(b + ' ' + (b == 0) + ' ' + currentGap);

            if(b==1) {
                gap = Math.max(gap, currentGap);
                currentGap = 0;
            }
            else {
                if(currentGap > -1) {
                    currentGap++;
                }
            }
        });
    }
    return gap;
}
