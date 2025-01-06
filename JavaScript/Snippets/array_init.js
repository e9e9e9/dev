const a = Array(10).keys();
console.log(a);

let data = Array.from(Array(10).keys());
console.log(data);
// [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]

// 단축 속성 이름 이용
// const id = 1;
// const obj = {id}; // 동일하게 {id: id}와 같다

data = Array.from({ length: 10 }, (_, id) => ({ id }));
console.log(data);
// [
//     { id: 0 }, { id: 1 },
//     { id: 2 }, { id: 3 },
//     { id: 4 }, { id: 5 },
//     { id: 6 }, { id: 7 },
//     { id: 8 }, { id: 9 }
//   ]

data = new Array(5).fill(2).map((val, idx) => {
  let obj = {};
  obj[idx] = val;
  return obj;
});
console.log(data);
// [ { '0': 2 }, { '1': 2 }, { '2': 2 }, { '3': 2 }, { '4': 2 } ]

//2nd demension array
const n = 3;

// shallow copy
const notWorking = new Array(n + 1).fill(Array(4));
notWorking[0][0] = 10;
console.log(notWorking);
// [ [ 10 ], [ 10 ], [ 10 ], [ 10 ] ]

// deep copy
const working = new Array(n + 1).fill().map((_) => new Array(4).fill(3));
working[0][0] = 10;
console.log(working);
// [ [ 10, 3, 3, 3 ], [ 3, 3, 3, 3 ], [ 3, 3, 3, 3 ], [ 3, 3, 3, 3 ] ]

console.log(new Array(n + 1));
console.log(new Array(n + 1).fill());

console.log([].sort((a, b) => a - b).at(-1));
