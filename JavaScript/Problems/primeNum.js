// 소수 : 1과 자기 자신을 젱외한 자연수로 나누어 떨어지지 않는 자연수
// 약수의 성질 : 자신의 약수 기준으로 곱셈 연산이 대칭 
// 소수 인지 판별하기 위해서는 약수의 성질을 이용하여 자신의 제곱근까지 소수 성질을 가지는지 확인하면 됨

function checkPrimeNum(num) {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if ((num % i) === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i < 1000001; i++) {
    const isPrimeNum = checkPrimeNum(i);
    console.log(`${i} is ${isPrimeNum ? "Prime Num" : "Not Prime Num"}`);
}