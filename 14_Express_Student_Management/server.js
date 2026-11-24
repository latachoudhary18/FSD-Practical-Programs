const express = require("express");
const app = express();
app.use(express.json());
let students = [{ id: 1, name: "Asha", course: "AI & DS" }];
app.get("/", (req,res) => res.send("Student Management API"));
app.get("/students", (req,res) => res.json(students));
app.get("/students/:id", (req,res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({message:"Student not found"});
  res.json(student);
});
app.post("/students", (req,res) => {
  const {name,course} = req.body;
  if (!name || !course) return res.status(400).json({message:"Name and course required"});
  const student = {id: students.length ? Math.max(...students.map(s=>s.id))+1 : 1, name, course};
  students.push(student); res.status(201).json(student);
});
app.put("/students/:id", (req,res) => {
  const student = students.find(s => s.id === Number(req.params.id));
  if (!student) return res.status(404).json({message:"Student not found"});
  const {name,course} = req.body;
  if (!name || !course) return res.status(400).json({message:"Name and course required"});
  student.name=name; student.course=course; res.json(student);
});
app.delete("/students/:id", (req,res) => {
  const id=Number(req.params.id);
  if (!students.some(s=>s.id===id)) return res.status(404).json({message:"Student not found"});
  students=students.filter(s=>s.id!==id); res.json({message:"Student deleted"});
});
app.listen(3000,()=>console.log("Server running on http://localhost:3000"));
