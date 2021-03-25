const list = Array(100).fill(-1);

function fibo(x) {
    let idx = 3
    list[1] = 1;
    list[2] = 1; 
    while (idx <= x) {
        list[idx] = list[idx - 1] + list[idx-2];
        idx++;
    }
    return list[x];
}

const result = fibo(100);
console.log(result);