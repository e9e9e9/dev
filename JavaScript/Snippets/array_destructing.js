// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);
// 10 20 [ 30, 40, 50 ]