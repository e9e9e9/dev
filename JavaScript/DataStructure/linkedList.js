class Node {
    constructor(val) {
        this.value = val;
        this.next;
        this.prev;
    }
}

class LinkedList {
    constructor() {
        this.front;
        this.rear;
    }

    showList(prefix) {
        let node = this.front;
        process.stdout.write(`${prefix} : `);
        while (node) {
            process.stdout.write(`${node.value} -> `);
            node = node.next;
        }
        console.log();
    }

    push(node) {
        if (this.front === undefined) {
            this.front = node;
            this.rear = node;
        } else {
            node.prev = this.rear;
            this.rear.next = node;
            this.rear = node;
        }
        this.showList('push');
    }

    pop() {
        const node = this.rear;
        if (node.prev === undefined) {
            this.front = undefined;
            this.rear = undefined;
        } else {
            this.rear = node.prev;
            node.prev.next = undefined;
        }
        this.showList('pop');
        return node;
    }

    unshift(node) {
        if (this.front === undefined) {
            this.front = node;
            this.rear = node;
        } else {
            node.next = this.front;
            this.front.prev = node;
            this.front = node;
        }
        this.showList('unshift');
    }

    shift() {
        const node = this.front;
        if (this.front !== undefined) {
            this.front = this.front.next;
            this.front.prev = undefined;
        }
        this.showList('shift');
        return node;
    }
}

const likedList = new LinkedList;
likedList.push(new Node(3));
likedList.push(new Node(4));
likedList.push(new Node(1));
likedList.push(new Node(2));
likedList.unshift(new Node(8));
likedList.unshift(new Node(2));
likedList.unshift(new Node(1));
likedList.unshift(new Node(5));
likedList.pop();
likedList.shift();
likedList.pop();
likedList.shift();
likedList.pop();
likedList.shift();