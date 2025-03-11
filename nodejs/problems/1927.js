// lesson 1 : 잦은 console.log는 시간 초과를 일으킨다.
// lesson 2 : 메모리 해제는 즉시 수행되지 않는다. (실시간 GC를 기대하지 말 것)

class Heap {
  constructor() {
    this.arr = [];
  }

  push(num) {
    this.arr.push(num);
    let idx = this.arr.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.arr[parentIdx] > this.arr[idx]) {
      [this.arr[idx], this.arr[parentIdx]] = [
        this.arr[parentIdx],
        this.arr[idx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    // console.log('push', this.arr);
  }

  pop() {
    if (this.arr.length <= 0) {
      return 0;
    }
    const result = this.arr[0];

    if (this.arr.length === 1) {
      this.arr.pop();
      return result;
    }

    this.arr[0] = this.arr.pop();
    let idx = 0;

    while (true) {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let smallestIdx = idx;

      if (left < this.arr.length && this.arr[left] < this.arr[smallestIdx]) {
        smallestIdx = left;
      }
      if (right < this.arr.length && this.arr[right] < this.arr[smallestIdx]) {
        smallestIdx = right;
      }
      if (smallestIdx !== idx) {
        [this.arr[idx], this.arr[smallestIdx]] = [
          this.arr[smallestIdx],
          this.arr[idx],
        ];
        idx = smallestIdx;
      } else {
        // console.log('pop', this.arr);
        return result;
      }
    }
  }
}

const input = require('fs')
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const heap = new Heap();
const nums = input.slice(1);
const results = [];

for (const num of nums) {
  if (num === 0) {
    results.push(heap.pop());
  } else {
    heap.push(num);
  }
}

console.log(results.join('\n'));
