function solution(n, times) {
    const copy_times = [...times];
    let front = 0;
    let rear = Math.pow(10, 18);
    let time = Math.pow(10, 18);
    
    while(true) {
        const traveler = times.reduce((acc, curr) => acc + Math.floor(time / curr),0);
        if (traveler === n) 
            return time;
        if (traveler > n) {
            console.log("traveler > n",traveler, n);
            const tempFront = time;
            time = Math.floor((time + rear) / 2);
            front = tempFront;
        } else {
            console.log("else",traveler, n);
            const tempRear = time;
            time = Math.floor((front + rear) / 2);
            rear = tempRear;
        }
    }
}