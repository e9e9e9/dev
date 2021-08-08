let data = Array.from(Array(10).keys());
console.log(data);

let data = Array.from({length: 10}, (_, id) => ({id}))
console.log(data);

let data = new Array(5).fill(2).map((val,idx)=>{
    let obj = {};
    obj[idx] = val;
    return obj;
});
console.log(data);