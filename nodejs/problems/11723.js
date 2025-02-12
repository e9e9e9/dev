const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);

let result = new Set();
for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(' ');
  b = Number(b);

  if (a === 'add') {
    result.add(b);
  } else if (a === 'remove') {
    result.delete(b);
  } else if (a === 'check') {
    console.log(result.has(b) ? 1 : 0);
  } else if (a === 'toggle') {
    if (result.has(b)) {
      result.delete(b);
    } else {
      result.add(b);
    }
  } else if (a === 'all') {
    result = new Set(
      Array(20)
        .fill()
        .map((_, i) => i + 1)
    );
  } else if (a === 'empty') {
    result = new Set();
  }
}
