// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let distance = 0;
  let timeStart = false;
  while (!stack.isEmpty()) {
    const removed = stack.pop();
    if (removed === b) {
      timeStart = true;
    }
    if (removed === a) {
      timeStart = false;
    }
    if (timeStart) {
      distance++;
    }

    tempStack.push(removed);
  }

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop();
    stack.push(removed);
  }

  return distance;
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance(students, "Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance(students, "Joe", "Jill");
console.log(distance2); // 2
