// Create 10 * 5 Array
const arr = Array.from(Array(10), () =>
  Array(5)
    .fill()
    .map((_, idx) => idx)
);
console.log(arr);
arr[9][1] = 10;
console.log(arr);

const arr2 = [...Array(10)].map((_, idx) => [...Array(5)].map((_, idx) => idx));
console.log(arr2);
arr2[9][1] = 10;
console.log(arr2);

const arr3 = Array(10)
  .fill()
  .map((_, idx) =>
    Array(5)
      .fill()
      .map((_, idx2) => idx2)
  );
console.log(arr3);
arr3[9][1] = 10;
console.log(arr3);

// ❗️ shallow copy
const shallowCopiedArray = Array(10).fill(
  Array(5)
    .fill()
    .map((val, idx) => idx)
);
console.log(shallowCopiedArray);
shallowCopiedArray[9][1] = 10;
console.log(shallowCopiedArray);
