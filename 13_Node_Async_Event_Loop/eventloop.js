console.log("Start");
setTimeout(() => console.log("Inside Timeout"), 1000);
console.log("End");
function fetchData(callback) {
  setTimeout(() => callback("Student data received"), 500);
}
fetchData((message) => console.log(message));
