// N - Array 인자 수, M - Query 수
// O(N+M) 시간으로 구간합을 빠르게 계산
// Prefix SUM 이용

const list = new Array(10).fill(undefined).map(() => Math.floor(Math.random() * 10 + 1)); //1 ~10
const prefixSumList = new Array(11).fill(0);

console.log(list);

for (const [idx, value] of list.entries()) {
    if (idx == 0) {
        prefixSumList[idx] = value;
        continue;
    }
    prefixSumList[idx] = value + prefixSumList[idx - 1];
}

console.log(`prefixSumList : ${prefixSumList}`);

function getIntervalSum(from, to) {
    const result =  prefixSumList[to] - prefixSumList[from];
    console.log(`from : ${from}, to : ${to}, result : ${result}`);
}

for (let i = 0; i < 10; i++) {
    const from = Math.floor(Math.random() * list.length);
    let to = Math.floor(Math.random() * list.length);
    to = to > from ? to : list.length - 1;
    getIntervalSum(from, to);
}