// lesson
// 다이나믹프로그래밍, 구현
// 어떻게 작은 단위로 정답을 구할지 고민할 수 있었고, 까다로울 수 있는 구현과정을 잘 진행함

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

// 자신을 땔 때 => (좌측 안 땜 점수 or 좌측 대각선 땐 점수) + 자신 점수
// 자신은 안 땔 때 => 상하의 땐 점수 or 대각선의 땜 점수
for (let i = 0; i < t; i++) {
  const n = Number(input[i * 3 + 1]);
  const first = input[i * 3 + 2].split(' ').map(Number);
  const second = input[i * 3 + 3].split(' ').map(Number);
  const scoreArr = [[...first], [...second]];

  const memo = Array(2)
    .fill()
    .map((_) =>
      Array(n)
        .fill()
        .map((_) => [0, 0])
    );

  for (let j = 0; j < n; j++) {
    memo[0][j][0] =
      j > 0
        ? Math.max(memo[0][j - 1][1], memo[1][j - 1][0]) + scoreArr[0][j]
        : scoreArr[0][j];
    memo[1][j][0] =
      j > 0
        ? Math.max(memo[1][j - 1][1], memo[0][j - 1][0]) + scoreArr[1][j]
        : scoreArr[1][j];
    memo[0][j][1] =
      j > 0 ? Math.max(memo[1][j][0], memo[1][j - 1][0]) : memo[1][j][0];
    memo[1][j][1] =
      j > 0 ? Math.max(memo[0][j][0], memo[0][j - 1][0]) : memo[0][j][0];
  }
  //   console.log(scoreArr);
  //   console.log(memo);
  console.log(
    Math.max(
      memo[0][n - 1][0],
      memo[0][n - 1][1],
      memo[1][n - 1][0],
      memo[1][n - 1][1]
    )
  );
}
