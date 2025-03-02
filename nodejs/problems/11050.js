const [n, k] = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const nMinusK = n - k;
let result = 1;
if (nMinusK > k) {
  for (let i = n; i > nMinusK; i--) {
    result *= i;
  }
  let kFactorial = 1;
  for (let j = 1; j <= k; j++) {
    kFactorial *= j;
  }
  result = Math.floor(result / kFactorial);
} else {
  for (let i = n; i > k; i--) {
    result *= i;
  }
  let kFactorial = 1;
  for (let j = 1; j <= nMinusK; j++) {
    kFactorial *= j;
  }
  result = Math.floor(result / kFactorial);
}
console.log(result);
