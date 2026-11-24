# Full Stack Development – 15 Practical Programs

This repository contains one independent folder for each of the 15 practical questions. Open the root folder in VS Code, then open the required practical folder.

## Requirements
- Experiments 1–6: Any modern web browser; no Node.js required.
- Experiments 7–10: Node.js and npm; run `npm install` inside the selected practical folder, then `npm run dev`.
- Experiments 11–13: Node.js; no third-party packages required.
- Experiments 14–15: Node.js 18+ and npm; run `npm install`, then `npm start`.

## Folder map
| Practical | Folder | Main file / run command |
|---|---|---|
| 1 Portfolio | `01_Portfolio` | `index.html` |
| 2 Student Registration | `02_Student_Registration` | `index.html` |
| 3 Simple Calculator | `03_Simple_Calculator` | `index.html` |
| 4 Marks and Grade Calculator | `04_Marks_Grade_Calculator` | `index.html` |
| 5 Interactive To-Do List | `05_Interactive_ToDo` | `index.html` |
| 6 Online Quiz | `06_Online_Quiz` | `index.html` |
| 7 React Basic | `07_React_Basic` | `npm run dev` |
| 8 Student Profile Management | `08_Student_Profile_Management` | `npm run dev` |
| 9 Expense Tracker | `09_React_Expense_Tracker` | `npm run dev` |
| 10 Feedback Collection | `10_React_Feedback_Collection` | `npm run dev` |
| 11 Basic Node.js | `11_Node_Basic` | `node hello.js` |
| 12 File Management | `12_Node_File_Management` | `node fileapp.js` |
| 13 Async and Event Loop | `13_Node_Async_Event_Loop` | `node eventloop.js` |
| 14 Student Management API | `14_Express_Student_Management` | `npm start` |
| 15 Online Book Store API | `15_Express_Online_Book_Store` | `npm start` |

## Important
Run npm commands from inside the practical's own folder, not from the repository root. Each React/Express folder has its own `package.json`. `node_modules` is not committed; install dependencies with `npm install`. Express practicals use in-memory sample data for easy exam demonstration; data resets when the server restarts.

See `GITHUB_PUSH_GUIDE.md` for GitHub upload instructions.
