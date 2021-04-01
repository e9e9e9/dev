const isPrimeNumList = Array(1000001).fill(true);

function es(){
    isPrimeNumList[0] = false;
    isPrimeNumList[1] = false;
    for (let currIdx = 2; currIdx < Math.floor(Math.sqrt(isPrimeNumList.length)); currIdx++) {
        if (isPrimeNumList[currIdx] === true) {
            let multiplier = 2;
            let nextIdx = currIdx * multiplier;
            while(nextIdx < isPrimeNumList.length) {
                isPrimeNumList[nextIdx] = false;
                multiplier++;
                nextIdx = currIdx * multiplier;
            }
        }
    }

    for (const [idx, isPrimeNum] of isPrimeNumList.entries()) {
        console.log(`${idx} is ${isPrimeNum ? "Prime Number" : "Not Prime Number"}`);
    }
}

es();