a = Array(6);
b = [...Array(6)];

console.log(a);
console.log(b);

console.log(b.map((val, idx) => idx));

c = [...Array(5)].map((_, idx) =>
    [...Array(5)].map((_, idx2) => idx * 5 + idx2)
);
console.log(c);

console.log(["a", "b", "c"].entries().next());
