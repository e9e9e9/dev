const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

console.log(a + b);
