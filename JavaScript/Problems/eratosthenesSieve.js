const nums = 10001;
const isPrimeNumList = Array(nums).fill(true);

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
}

function showRandomNumsResult(cnt) {
    const randomIdxs = 
        Array.from({length: nums - 1}, (el, idx) => idx + 1)
        .sort(() => 0.5 - Math.random())
        .slice(0, cnt);
    for (idx of randomIdxs) {
        console.log(`${idx} is ${isPrimeNumList[idx] ? "Prime Number" : "Not Prime Number"}`);
    }
}

function showAllPrimes() {
    const allPrimes = isPrimeNumList.map((el, idx) => {
        if (el) {
            if (idx !== 0) {
                return idx;
            }
        }
    })
    .filter((el) => (typeof(el) === 'number'))

    for (prime of allPrimes) {
        console.log(prime);
    }
}

es();
showAllPrimes();
showRandomNumsResult(10);