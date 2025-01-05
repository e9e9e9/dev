
function formingMagicSquare(s) {
    // Write your code here
    console.log(s);
    
    const nums = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            nums.push(s[i][j]);
        }
    }
    
    const getPermutations = (arr) => {
        if (arr.length === 1) {
            return arr.map(el => [el]);
        }
        const cases = [];
        for (const [idx, el] of arr.entries()) {
            const rest = [...arr]
            rest.splice(idx, 1);
            const permutations = getPermutations(rest);
            cases.push(...permutations.map(p => [el, ...p]));
        }
        return cases;
    }
    
    const isMagicSquare = arr => {
        const lineSum = arr[0] + arr[1] + arr[2];
        if (
            arr[3] + arr[4] + arr[5] === lineSum &&
            arr[6] + arr[7] + arr[8] === lineSum &&
            arr[0] + arr[3] + arr[6] === lineSum &&
            arr[1] + arr[4] + arr[7] === lineSum &&
            arr[2] + arr[5] + arr[8] === lineSum &&
            arr[0] + arr[4] + arr[8] === lineSum &&
            arr[2] + arr[4] + arr[6] === lineSum
        ) {
            console.log('return true');
            return true;
        }
        return false;
    }
    
    const getDiff = (origin, target) => {
        let diff = 0;
        for (let i = 0; i < 9; i++) {
            diff += Math.abs(origin[i] - target[i]);
        }
        return diff;
    }
    
    let result = 987654321;
    const permutations = getPermutations([1,2,3,4,5,6,7,8,9]);
    for (let i = 0; i < permutations.length; i++) {
        if (isMagicSquare(permutations[i])) {
            result = Math.min(result, getDiff(nums, permutations[i]));
        }
    }
    return result;
}

let result = formingMagicSquare(
    [[4, 9, 2],
    [3, 5, 7],
    [8, 1, 5]]
);

console.log(result);
result = formingMagicSquare(
    [[5, 3, 4],
    [1, 5, 8],
    [6, 4, 2]]
);

console.log(result);
result = formingMagicSquare(
    [[4, 8, 2],
    [4, 5, 7],
    [6, 1, 6]]
);
console.log(result);