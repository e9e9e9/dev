// minHeap
// Reference : https://www.digitalocean.com/community/tutorials/js-binary-heaps

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

const bh = new BinaryHeap();
bh.push(9);
bh.push(4);
bh.push(7);
bh.push(1);
bh.push(2);
bh.push(6);
bh.push(3);

console.log(bh.pop());
console.log(bh.pop());
console.log(bh.pop());
console.log(bh.pop());

bh.printHeap();
