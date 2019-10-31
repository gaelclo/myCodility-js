function solution(N, A) {
        
    let m = new Array(N);
    m.fill(0);
    
    let max = 0;
    let maxTriggered = false;
    let lastMaxTriggered = 0;
    
    A.forEach(function(e) {
        if(e==N+1) {
            maxTriggered = true;
            lastMaxTriggered = max;
        }
        else {
            if(maxTriggered && m[e-1]<lastMaxTriggered) {
                m[e-1] = lastMaxTriggered;    
            }
            max = Math.max(max, ++m[e-1]);
        }
    });

    m.forEach(function(e, i) {
        if(maxTriggered && m[i]<lastMaxTriggered) {
            m[i] = lastMaxTriggered;    
        }
    });
    return m;
}