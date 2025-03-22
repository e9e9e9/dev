/*
공통 부모 찾기
각 자식에서 공통 부모까지의 거리 구하기
모든 말단 자식간의 거리 중 최대값 구하기

공통 부모 찾기를 시간복잡도와 공간복잡도를 낮추는 과정이어려웠다.

- 실패한 시도
  공통 부모 찾기
  메모리에 각 노드마다 모든 조상의 index를 배열로 저장해서 공통부모를 찾도록 시도했다.
  이 과정에서 메모리 초과가 발생했다.
  메모리에 저장하는 과정을 없애고 함수화하여 해결했다.

  공통 부모를 찾고 각 자식 노드에서 공통 부모까지의 weight합을 구하는 방식으로 시도했다.
  공통부모를 찾는 과정과 공통부모에 도달하는 과정에 연산이 필요해 시간 초과가 발생했다.

- 성공한 시도
  시간 복잡도를 줄이기 위해 완전히 새로운 방식으로 다시 생각했다.
  모든 노드에서 루트까지 weight합을 구하여 memozation하고
  말단 노드마다 지름을 구하는 방식을 각 노트 - root까지 거리에서 공통노드 - root까지 거리를 빼서 시간복잡도를 줄일 수 있었다.

아래 코드를 보면 더 간결하고 빠르게 풀 수 있는 것으로 보인다.
코드를 보고 이해하는 과정이 필요하다.
https://www.acmicpc.net/source/91530348

문제 풀이는 문제를 정확히 이해하고 알고리즘을 효율적으로 능력이 필요하다.
어려운 알고리즘을 모두 아는 것 보다 dfs, bfs와 같은 쉬운 알고리즘을 제대로 활용하고 구현하는 능력이,
이 레벨에서는 가장 중요한 것 같다.
*/

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n');
const n = Number(input[0]);
const parentAndWeights = Array(n + 1).fill();
const isCandidate = Array(n + 1).fill(true);
const toRoot = Array(n + 1).fill(0);

for (const edge of input.slice(1).map((str) => str.split(' ').map(Number))) {
  const [parent, child, weight] = edge;
  parentAndWeights[child] = [parent, weight];
  isCandidate[parent] = false;
}
parentAndWeights[1] = [1, 0];
isCandidate[1] = true;

for (let i = 1; i < n + 1; i++) {
  let [parent, weight] = parentAndWeights[i];
  let weightSum = weight;
  while (true) {
    if (parent === 1) {
      toRoot[i] = weightSum;
      break;
    }
    weightSum += parentAndWeights[parent][1];
    parent = parentAndWeights[parent][0];
  }
}

const getCommonParent = (a, b) => {
  //   console.log(a, b);

  let aParent = parentAndWeights[a][0];
  while (true) {
    let bParant = parentAndWeights[b][0];
    while (true) {
      if (aParent === bParant) {
        return aParent;
      }
      if (bParant === 1) {
        break;
      }
      bParant = parentAndWeights[bParant][0];
    }
    aParent = parentAndWeights[aParent][0];
  }
};

const getRadius = (a, b) => {
  const commonParent = getCommonParent(a, b);
  return toRoot[a] + toRoot[b] - toRoot[commonParent] * 2;
};

let result = 0;
for (let i = 1; i < n; i++) {
  if (!isCandidate[i]) {
    continue;
  }
  for (let j = i + 1; j < n + 1; j++) {
    if (!isCandidate[j]) {
      continue;
    }
    result = Math.max(result, getRadius(i, j));
  }
}

// console.log(parentAndWeights);
// console.log(toRoot);
console.log(result);
