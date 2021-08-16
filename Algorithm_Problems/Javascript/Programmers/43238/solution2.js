function solution(n, times) {
    let front = 0;
    let rear = Math.pow(10, 18);
    let time = Math.floor(rear / 2);
    let answer = time;
    let moveLeft = true;
    
    while(true) {
        const passedTravlers = times.map(el => Math.floor(time / el));
        const travelerCnt = passedTravlers.reduce((acc, curr) => {
            return acc + curr; 
        },0);
        
        if (travelerCnt >= n) {
            console.log("if",travelerCnt, n, time, front, rear);
            answer = time;
            rear = time;
            moveLeft = true;
        } else {
            console.log("else",travelerCnt, n, time, front, rear);
            if (time === front) {
                break;
            }
            front = time;
            moveLeft = false;
        }
        time = Math.floor((front + rear) / 2);
    }
    return answer;
}