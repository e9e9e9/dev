const source = [1,2,3,4];
const permutation = (src) => {
    if (src.length === 1) {
        return src.map(el => [el]);
    }
    let cases = [];
    for (const [idx, el] of src.entries()) {
        const rest = [...src]
        rest.splice(idx, 1);
        const permutations = permutation(rest);

        cases.push(...permutations.map(p => [el, ...p]));
    }
    return cases;
}

const allCase = permutation(source);
console.log(allCase);