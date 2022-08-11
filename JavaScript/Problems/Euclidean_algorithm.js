// 유클리드 호제법
const a = Math.floor(Math.random() * 100);
const b = Math.floor(Math.random() * 100);

function gcd(a, b) {
    if (b > a) {
        let temp = b;
        b = a;
        a= temp;
    }
    if (a % b === 0) {
        return b;
    }
    return gcd(b, a % b);
}

console.log(`GCD for ${a} and ${b} is ${gcd(a, b)}`);