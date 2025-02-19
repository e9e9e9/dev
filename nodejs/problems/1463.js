const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split()
  .map(Number)[0];

const answers = [0, 0, 1, 1];

if (input < answers.length) {
  console.log(answers[input]);
  return;
}
while (answers.length <= input) {
  answers.push(
    Math.min(
      answers.length % 3 === 0
        ? answers[Math.floor(answers.length / 3)] + 1
        : Infinity,
      answers.length % 2 === 0
        ? answers[Math.floor(answers.length / 2)] + 1
        : Infinity,
      answers[answers.length - 1] + 1
    )
  );
}
// console.log(answers);
console.log(answers[answers.length - 1]);
