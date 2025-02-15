const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt',
    'utf8'
  )
  .toString()
  .trim()
  .split('\n');
const [m, n] = input[0].split(' ').map(Number);

// console.log(m, n);

const tomatos = [];
for (let i = 1; i < input.length; i++) {
  tomatos.push(input[i].split(' ').map(Number));
}

// console.log(tomatos);

// const isSame = (before, after) => {
//   for (let i = 0; i < before.length; i++) {
//     for (let j = 0; j < before[0].length; j++) {
//       if (before[i][j] !== after[i][j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const isDone = (after) => {
  for (let i = 0; i < after.length; i++) {
    for (let j = 0; j < after[0].length; j++) {
      if (after[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
};

let result = 0;
const q = [];

for (let i = 0; i < tomatos.length; i++) {
  for (let j = 0; j < tomatos[0].length; j++) {
    if (tomatos[i][j] === 1) {
      q.push([i, j, 0]);
    }
  }
}
// console.log(q);
let front = 0;
while (q.length > 0 && front < q.length) {
  const [i, j, n] = q[front];
  if (i - 1 >= 0 && tomatos[i - 1][j] == 0) {
    tomatos[i - 1][j] = 1;
    q.push([i - 1, j, n + 1]);
  }
  if (i + 1 < tomatos.length && tomatos[i + 1][j] == 0) {
    tomatos[i + 1][j] = 1;
    q.push([i + 1, j, n + 1]);
  }
  if (j - 1 >= 0 && tomatos[i][j - 1] == 0) {
    tomatos[i][j - 1] = 1;
    q.push([i, j - 1, n + 1]);
  }
  if (j + 1 < tomatos[0].length && tomatos[i][j + 1] == 0) {
    tomatos[i][j + 1] = 1;
    q.push([i, j + 1, n + 1]);
  }
  result = n;
  front++;
  //   console.log(result, tomatos);
}
if (isDone(tomatos)) {
  console.log(result);
} else {
  console.log(-1);
}
