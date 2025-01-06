class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 부모 노드의 인덱스
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 왼쪽 자식 노드의 인덱스
  leftChildIndex(index) {
    return 2 * index + 1;
  }

  // 오른쪽 자식 노드의 인덱스
  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // 힙에 값을 추가
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  // 새로운 값이 삽입되었을 때 정렬
  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0 && this.heap[index] < this.heap[this.parentIndex(index)]) {
      const parentIdx = this.parentIndex(index);
      [this.heap[index], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[index],
      ];
      index = parentIdx;
    }
  }

  // 최소값을 제거하고 반환
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  // 최소값을 제거한 후 정렬
  bubbleDown() {
    let index = 0;

    while (this.leftChildIndex(index) < this.heap.length) {
      let smallest = this.leftChildIndex(index);
      const rightIdx = this.rightChildIndex(index);

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[smallest]
      ) {
        smallest = rightIdx;
      }

      if (this.heap[index] <= this.heap[smallest]) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  // 힙 출력
  printHeap() {
    console.log(this.heap);
  }
}

// 사용 예제
const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);

minHeap.printHeap(); // 출력: [2, 5, 20, 10]

console.log(minHeap.extractMin()); // 출력: 2
minHeap.printHeap(); // 출력: [5, 10, 20]
