class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > priority) {
        this.queue.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.queue.push(queueElement);
    }
  }

  dequeue() {
    return this.queue.shift(); // 가장 높은 우선순위 요소 제거
  }

  peek() {
    return this.queue[0]; // 가장 높은 우선순위 요소 확인
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// 사용 예제
const pq = new PriorityQueue();
pq.enqueue('A', 2);
pq.enqueue('B', 1);
pq.enqueue('C', 3);

console.log(pq.dequeue()); // { element: 'B', priority: 1 }
console.log(pq.peek()); // { element: 'A', priority: 2 }
