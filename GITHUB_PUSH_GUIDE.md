# GitHub and VS Code quick guide

## First-time upload
1. Extract this ZIP.
2. Open the `FSD_Practicals_15` root folder in VS Code.
3. Create an empty GitHub repository (do not initialize it with a README).
4. In the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Add 15 FSD practical programs"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Later updates
```bash
git add .
git commit -m "Update practical programs"
git push
```

## During the exam
Clone the repository before the exam and keep the local copy. In VS Code Explorer, open the folder for the required practical. This local copy works without GitHub or internet.

## Run commands
- HTML practicals 1–6: open the folder's `index.html` in a browser.
- React practicals 7–10: open terminal in that practical folder; run `npm install`, then `npm run dev`.
- Node practicals 11–13: run `node hello.js`, `node fileapp.js`, or `node eventloop.js`.
- Express practicals 14–15: run `npm install`, then `npm start`. Open a second terminal and run `npm test` to exercise the API.

Never commit `node_modules`, `.env` files, passwords or access tokens.
