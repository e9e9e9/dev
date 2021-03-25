const list = Array(101).fill(-1);

function fibo(x) {
    if (x == 1 || x == 2) {
        list[x] = 1;
        return list[x];
    }
    if (list[x] == -1) {
        list[x] = fibo(x - 1) + fibo(x - 2);
    }
    return list[x];
}

const result = fibo(100);
console.log(result);