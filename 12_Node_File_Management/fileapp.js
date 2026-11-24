const fs = require("fs");
const file = "notes.txt";
fs.writeFileSync(file, "FSD practical revision\\n");
console.log("File created and written.");
fs.appendFileSync(file, "Node.js File Management\\n");
console.log("Content appended.");
const data = fs.readFileSync(file, "utf8");
console.log("File contents:\\n" + data);
if (fs.existsSync(file)) {
  // Comment out the next two lines if you want to inspect notes.txt after execution.
  fs.unlinkSync(file);
  console.log("File deleted.");
}
