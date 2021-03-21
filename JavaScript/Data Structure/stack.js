const stack = []

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.pop();
stack.pop();
stack.pop();

console.log(stack); // ordered by input sequence
console.log(stack.reverse()); // reversed