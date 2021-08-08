function solution(numbers) {
    const nums = numbers.split('').map(a => Number(a));

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    const getAllCases = (arr, selectCnt) => {
        const result = []
        if (selectCnt === 1) {
            return arr.map(el => [el]);
        }
        
        for (const [idx, item] of arr.entries()) {
            const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
            const permutations = getAllCases(rest, selectCnt - 1);
            const attached = permutations.map(el => [item, ...el]);
            result.push(...attached);
        }
        return result;
    }
    
    let allCasesStr = [];
    for (let i in numbers) {
        allCasesStr = [...allCasesStr, ...getAllCases(nums, Number(i) + 1)];
    }
    const setOfNums = new Set(allCasesStr.map(el => el.join("")).filter(el => !el.startsWith('0')));
    const allNums = [...setOfNums].map(el => Number(el));

    const answer = allNums.filter(el => isPrime(el)).length;
    return answer;
}

solution("17");