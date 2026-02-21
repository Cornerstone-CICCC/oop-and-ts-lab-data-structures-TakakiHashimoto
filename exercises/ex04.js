// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function isPalindrome(queue) {
  // your code here
  let result = true;
  const size = Math.floor(queue.size() / 2);
  let counter = 0;

  for (let i = 0; i < size; i++) {
    const removed = queue.dequeue();
    console.log(removed);
    console.log(queue.items[queue.size() - 1 - i]);
    if (removed !== queue.items[queue.size() - 1 - i]) {
      result = false;
      return;
    }
  }

  return result;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(3);

queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
