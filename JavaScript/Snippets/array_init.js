let data = Array.from(Array(10).keys());
console.log(data);

data = Array.from({length: 10}, (_, id) => ({id}))
console.log(data);

data = new Array(5).fill(2).map((val,idx)=>{
    let obj = {};
    obj[idx] = val;
    return obj;
});
console.log(data);

//2nd demension array
const n = 3;

// shallow copy
const notWorking = new Array(n + 1).fill(new Array());
notWorking[0][0] = 10;
console.log(notWorking);

// depp copy
const working = new Array(n + 1).fill().map(_ => new Array());
working[0][0] = 10;
console.log(working);