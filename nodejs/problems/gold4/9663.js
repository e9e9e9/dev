/*
브루트포스로 단순히 답을 찾는 과정은 구현까지해냈지만,
시간 복잡도를 낮추는 방법에 대해 2일 정도 고민하였다.

완전히 탐색이 되었을 때 이전 상태로 되돌리는 과정이 필요했다.
이전 상태로 되돌리기 위해 2차원 배열의 복사를 사용하게 될 경우 시간초과가 발생했다.
이전 상태로 되돌리기 위한 대상을 특정하여 요소를 축소하는 전략을 적용했다.

재귀 구현, 이전 상태 되돌리기 전략(back-tracking), 시간복잡도를 최소화하기 위한 방식의 고민에 대해 공부가 됐다.
*/

const n = Number(
  require('fs')
    .readFileSync(
      process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
    )
    .toString()
    .trim()
);

let result = 0;
let board = Array(n + 1)
  .fill()
  .map((_) => Array(n + 1).fill(true));

const isVaild = (x, y) => {
  return x >= 1 && x <= n && y >= 1 && y <= n;
};

const setAvailableAndGetRecoverTarget = (x, y) => {
  const recoverArr = [];
  let i = 1;
  while (isVaild(x + i, y)) {
    if (board[x + i][y] === true) {
      board[x + i][y] = false;
      recoverArr.push([x + i, y]);
    }
    if (isVaild(x + i, y + i) && board[x + i][y + i] === true) {
      board[x + i][y + i] = false;
      recoverArr.push([x + i, y + i]);
    }
    if (isVaild(x + i, y - i) && board[x + i][y - i] === true) {
      board[x + i][y - i] = false;
      recoverArr.push([x + i, y - i]);
    }
    i++;
  }
  return recoverArr;
};

const solve = (x) => {
  for (let i = 1; i < n + 1; i++) {
    if (board[x][i] === true) {
      if (x === n) {
        result++;
        continue;
      }
      const recoverArr = setAvailableAndGetRecoverTarget(x, i);
      solve(x + 1);
      recoverArr.forEach((val) => {
        const [x, y] = val;
        board[x][y] = true;
      });
    }
  }
};

solve(1);
console.log(result);
