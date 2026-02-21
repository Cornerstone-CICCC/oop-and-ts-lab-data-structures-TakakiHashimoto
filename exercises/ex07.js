// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require("../lib/SLL");

function findMiddle(list) {
  // your code here
  let currentlyOn = list.head;
  let currentlyOnFast = list.head;

  while (currentlyOnFast.next !== null) {
    currentlyOn = currentlyOn.next;
    currentlyOnFast = currentlyOnFast.next.next;
  }

  return currentlyOn.data;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3
