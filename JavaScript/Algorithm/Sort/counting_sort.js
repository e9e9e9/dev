// 계수 정렬
// 등장하는 max num의 길이의 array를 만들수 있을 때 사용 가능
const maxValue = 10;
const rawArray = Array.from({length: 20}, () => Math.floor(Math.random() * (maxValue + 1)));
const countingArray = Array(maxValue + 1).fill(0);
const sortedArray = [];

for(el of rawArray) {
    countingArray[el]++;
}

for(const [idx, el] of countingArray.entries()) {
    for (let i = 0; i < el; i++) {
        sortedArray.push(idx);
    }
}

console.log(`rawArray    : ${rawArray}`);
console.log(`sortedArray : ${sortedArray}`);