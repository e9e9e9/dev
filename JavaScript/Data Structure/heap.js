// minHeap
// Reference : https://www.digitalocean.com/community/tutorials/js-binary-heaps

class BinaryHeap {
    constructor() {
      this.values = [];
    }

    swap(idx1, idx2) {
        const tempVal = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = tempVal;
    }

    add(val) {
        this.values.push(val);
        let currIdx = this.values.length - 1;
        let currVal = this.values[currIdx];

        while(currIdx > 0) {
            const parentIdx = Math.floor((currIdx - 1) / 2); 
            const parentVal =  this.values[parentIdx];
            if (currVal < parentVal) {
                this.swap(currIdx, parentIdx);
                currIdx = parentIdx;
            } else {
                break;
            }
        }
        this.printHeap();
    }

    pop() {
        const popValue = this.values[0];
        const rootValue = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = rootValue;
            let currIdx = 0;
            let currVal = this.values[currIdx];
    
            while(currIdx < this.values.length) {
                currVal = this.values[currIdx];
                let leftIdx = (2 * currIdx) + 1;
                let leftVal = this.values[leftIdx];
                let rightIdx = (2 * currIdx) + 2;
                let rightVal = this.values[rightIdx];
                
                if (leftVal < currVal) {
                    this.swap(leftIdx, currIdx);
                    currIdx = leftIdx;
                } else if (rightVal < currVal) {
                    this.swap(rightIdx, currIdx);
                    currIdx = rightIdx;
                } else {
                    break;
                }
            }
        }
        return popValue;
    }
    
    printHeap() {
        console.log(`this.values : ${this.values} , this.values.length = ${this.values.length}`);
    }
  }
  
  const bh = new BinaryHeap();
  bh.add(9);
  bh.add(4);
  bh.add(7);
  bh.add(1);
  bh.add(2);
  bh.add(6);
  bh.add(3);

  console.log(bh.pop());
  console.log(bh.pop());
  console.log(bh.pop());
  console.log(bh.pop());

  bh.printHeap();