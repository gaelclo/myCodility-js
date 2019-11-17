function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //console.log();
    if(A.length<3) return 0;
    
    let peaks = [];
    for(let i=1;i<A.length-1;i++) {
        if(A[i-1]<A[i] && A[i]>A[i+1]) peaks.push(i);
    }
    
    if(peaks.length==0) return 0;
    
    let flags = Math.ceil(Math.sqrt(A.length));
    let max = 0;
    //console.log('peaks:'+peaks);
    while(flags>0) {
        let localFlag = 1;
        let lastPeak = peaks[0];
        for(let j=1;j<peaks.length && localFlag<=flags;j++) {
                //console.log('lastPeak:'+lastPeak);
                //console.log('flags:'+flags);
                //console.log('peaks[j]:'+peaks[j]);
            if(lastPeak+flags<peaks[j]) {
                localFlag++;
                lastPeak = peaks[j];
                //console.log('add');
            }
        }
        max = Math.max(max, localFlag);
        //console.log('max:'+max);
        flags--;
        //console.log('---');
    }
    return max;
}