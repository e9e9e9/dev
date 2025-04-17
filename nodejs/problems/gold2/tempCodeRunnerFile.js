const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const t = Number(input[0]);

let idx = 1;
for (let j = 0; j < t; j++) {
  const [n, m, w] = input[idx].split(' ').map(Number);
  idx++;

  const edges = [];
  for (let i = idx; i < m + idx; i++) {
    const [s, e, t] = input[i].split(' ').map(Number);
    edges.push([s, e, t]);
    edges.push([e, s, t]);
  }
  for (let i = idx + m; i < m + idx + w; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    edges.push([s, e, -w]);
  }

  let result = 'NO';
  for (let i = idx + m; i < m + idx + w; i++) {
    const [s, e, w] = input[i].split(' ').map(Number);
    if (s === e) {
      result = 'YES';
      break;
    }
    const costs = Array(n + 1).fill(Infinity);
    costs[e] = -w;
    for (let k = 0; k < n; k++) {
      for (const edge of edges) {
        const [curr, next, cost] = edge;
        if (costs[curr] !== Infinity && costs[curr] + cost < costs[next]) {
          costs[next] = costs[curr] + cost;
          if (k === n - 1) {
            result = 'YES';
          }
        }
      }
    }

    console.log(costs);

    if (result === 'YES') {
      break;
    }
    if (costs[s] < 0) {
      result = 'YES';
      break;
    }
  }
  console.log(result);

  idx = idx + m + w;
}
