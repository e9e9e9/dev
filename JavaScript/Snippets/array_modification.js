// split - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const str = "1 2 3 4 5";
const arr = str.split(" ").map((el) => parseInt(el));

console.log(arr); //[ 1, 2, 3, 4, 5 ]

// splice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// splice(start, deleteCount, item1, item2, itemN)
arr.splice(2, 0, 3.1, 3.2);
console.log(arr); // [ 1, 2, 3.1, 3.2, 4, 5 ]

// slice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// slice(start, end)
console.log(arr.slice(2, 4)); // [ 3.1, 3.2 ]
console.log(arr); // [ 1, 2, 3.1, 3.2, 4, 5 ]
