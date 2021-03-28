/* graph
      5
    /    \ 
  1       2       3  -  6
    \              \     \
      4  - 7        8     9
*/

const parents = Array.from(Array(10).keys());
console.log(parents);

function findParent(target) {
    if (parents[target] !== target) {
        parents[target] = findParent(parents[target]);
    }
    return parents[target];
}

function union(firstTarget, secondTarget) {
    const firstParent = findParent(firstTarget);
    const secondParent = findParent(secondTarget);

    if (firstParent < secondParent) {
        parents[secondTarget] = firstParent; 
    } else {
        parents[firstTarget] = secondParent;
    }
}

union(1, 5);
union(5, 2);
union(1, 4);
union(4, 7);
union(1, 5);

union(8, 3);
union(3, 6);
union(6, 9);

for ([target, parent] of parents.entries()) {
    console.log(`target : ${target}, parent : ${parent}`);
}