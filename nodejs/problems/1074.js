const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split(' ')
  .map(Number);
// console.log(input);

const [n, r, c] = input;

// console.log(n, r, c);

const solve = (base, depth, b_r, b_c, r, c) => {
  //   console.log(base, depth, b_r, b_c, r, c);
  if (depth === 0 || (b_r === r && b_c === c)) {
    return base;
  }
  const increment = Math.floor(Math.pow(4, depth) / 4);
  const halfLength = Math.pow(2, depth - 1) - 1;

  // area 1
  if (r <= b_r + halfLength && c <= b_c + halfLength) {
    return solve(base, depth - 1, b_r, b_c, r, c);
  }
  // area 2
  else if (r <= b_r + halfLength && c > b_c + halfLength) {
    return solve(base + increment, depth - 1, b_r, b_c + halfLength + 1, r, c);
  }
  // area 3
  else if (r > b_r + halfLength && c <= b_c + halfLength) {
    return solve(
      base + 2 * increment,
      depth - 1,
      b_r + halfLength + 1,
      b_c,
      r,
      c
    );
  }
  // area 4
  else {
    return solve(
      base + 3 * increment,
      depth - 1,
      b_r + halfLength + 1,
      b_c + halfLength + 1,
      r,
      c
    );
  }
};

const result = solve(0, n, 0, 0, r, c);
console.log(result);
