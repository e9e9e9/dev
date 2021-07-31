let sampleData = Array.from({length: 10}, (_, id) => ({id}))
console.log(sampleData);

let data = new Array(5).fill(2).map((val,idx)=>{
    let obj = {};
    obj[idx] = val;
    return obj;
});
console.log(data);