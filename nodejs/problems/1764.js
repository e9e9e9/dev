const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

// console.log(input);

const [n, m] = input[0].split(' ').map(Number);
const result = [];

const neverSeen = new Set();
for (let i = 1; i < n + 1; i++) {
  neverSeen.add(input[i]);
}
for (let i = n + 1; i < n + 1 + m; i++) {
  if (neverSeen.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
for (const item of result.sort()) {
  console.log(item);
}
