const arr = Array.from({length:10}, ((val, idx) => idx));
console.log(arr);

// descending order 
arr.sort((firstEl, secondEl) => secondEl - firstEl);
console.log(arr);

// ascending order
arr.sort((firstEl, secondEl) => firstEl - secondEl);
console.log(arr);

const arr2 = Array.from({length:10}, ((val, idx) => [idx, -idx]));
console.log(arr2);

// ascending order by second val
arr2.sort((firstEl, secondEl) => firstEl[1] - secondEl[1])
console.log(arr2);