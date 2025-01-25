const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim();

let num = Math.floor(Number(input));
let curr = 666;

while (true) {
  if (String(curr).includes('666')) {
    num--;
  }

  if (num === 0) {
    console.log(curr);
    break;
  }

  curr++;
}
