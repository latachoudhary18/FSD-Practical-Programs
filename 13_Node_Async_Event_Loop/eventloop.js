// Experiment 13: Demonstrate asynchronous programming and the Node.js event loop
console.log("1. Program started");

function getStudent(callback) {
  setTimeout(() => {
    callback("Student data received successfully");
  }, 1000);
}

getStudent((message) => {
  console.log("4. Callback:", message);
});

setTimeout(() => {
  console.log("5. Timer callback executed");
}, 0);

console.log("2. Synchronous statement executed");

Promise.resolve().then(() => {
  console.log("3. Promise microtask executed");
});

console.log("The main program does not wait for the timers.");
