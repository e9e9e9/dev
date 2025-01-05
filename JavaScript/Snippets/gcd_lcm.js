function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// 예제 사용:
let num1 = 6;
let num2 = 18;
console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);  // 출력: "LCM of 12 and 18 is 36"

console.log(12%18);