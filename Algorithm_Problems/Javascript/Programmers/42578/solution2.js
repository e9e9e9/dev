function solution(clothes) {
    return Object.values(clothes.reduce((obj, curr) => {
        obj[curr[1]] = obj[curr[1]] ? obj[curr[1]] + 1 : 1;
        return obj;
    }, {})).reduce((acc, curr) => acc * (curr + 1), 1) - 1;
}