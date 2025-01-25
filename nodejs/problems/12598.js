const fs = require('fs');
const rawInput =
  process.platform === 'linux'
    ? fs.readFileSync(0, 'utf-8')
    : fs.readFileSync(__dirname + '/input.txt');

class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(val) {
    this.heap.push(val);
    let currIdx = this.heap.length - 1;
    let currVal = this.heap[currIdx];

    while (currIdx > 0) {
      const parentIdx = Math.floor((currIdx - 1) / 2);
      const parentVal = this.heap[parentIdx];
      if (currVal < parentVal) {
        this.swap(currIdx, parentIdx);
        currIdx = parentIdx;
      } else {
        break;
      }
    }
    // this.printHeap('push');
  }

  pop() {
    const popValue = this.heap[0];
    const rootValue = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = rootValue;
      let currIdx = 0;

      while (currIdx < this.heap.length) {
        let leftIdx = 2 * currIdx + 1;
        let rightIdx = 2 * currIdx + 2;
        let smallestIdx = currIdx;

        if (
          leftIdx < this.heap.length &&
          this.heap[leftIdx] < this.heap[smallestIdx]
        ) {
          smallestIdx = leftIdx;
        }
        if (
          rightIdx < this.heap.length &&
          this.heap[rightIdx] < this.heap[smallestIdx]
        ) {
          smallestIdx = rightIdx;
        }
        if (smallestIdx !== currIdx) {
          this.swap(currIdx, smallestIdx);
          currIdx = smallestIdx;
        } else {
          break;
        }
      }
    }
    // this.printHeap('pop');
    return popValue;
  }

  peek() {
    return this.heap[0];
  }

  length() {
    return this.heap.length;
  }

  get() {
    return this.heap;
  }

  printHeap(method) {
    console.log(
      `${method} - this.heap : ${this.heap} , this.heap.length = ${this.heap.length}`
    );
  }
}

const inputDatas = rawInput.toString().trim().split('\n');

const meetingCnt = parseInt(inputDatas[0], 10);
const meetings = inputDatas
  .slice(1)
  .map((val) => val.split(' ').map((str) => Number(str)));
const sortedMeetings = meetings.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
// console.log(sortedMeetings);

const bh = new BinaryHeap();
for (const [start, end] of sortedMeetings) {
  //   console.log(bh.peek(), start, end);
  if (bh.length() > 0 && bh.peek() <= start) {
    bh.pop();
  }
  bh.push(end);
}
console.log(bh.length());
