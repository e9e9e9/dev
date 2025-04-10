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

let changedTomatosBefore = JSON.parse(JSON.stringify(tomatos));
let changedTomatosAfter = JSON.parse(JSON.stringify(tomatos));

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

if (isDone(changedTomatosBefore)) {
  console.log(result);
} else {
  while (true) {
    let isModified = false;
    for (let i = 0; i < changedTomatosBefore.length; i++) {
      for (let j = 0; j < changedTomatosBefore[0].length; j++) {
        if (changedTomatosBefore[i][j] === 1) {
          if (i - 1 >= 0 && changedTomatosBefore[i - 1][j] == 0) {
            changedTomatosAfter[i - 1][j] = 1;
            isModified = true;
          }
          if (
            i + 1 < changedTomatosBefore.length &&
            changedTomatosAfter[i + 1][j] == 0
          ) {
            changedTomatosAfter[i + 1][j] = 1;
            isModified = true;
          }
          if (j - 1 >= 0 && changedTomatosBefore[i][j - 1] == 0) {
            changedTomatosAfter[i][j - 1] = 1;
            isModified = true;
          }
          if (
            j + 1 < changedTomatosBefore[0].length &&
            changedTomatosAfter[i][j + 1] == 0
          ) {
            changedTomatosAfter[i][j + 1] = 1;
            isModified = true;
          }
        }
      }
    }
    result++;
    // console.log(result, changedTomatosAfter);

    if (isDone(changedTomatosAfter)) {
      break;
    } else if (!isModified) {
      result = -1;
      break;
    }
    changedTomatosBefore = JSON.parse(JSON.stringify(changedTomatosAfter));
  }

  console.log(result);
}
