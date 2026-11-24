# Push this repository to GitHub (Windows + VS Code)

1. Create a new **public or private** repository on GitHub. Suggested name: `FSD-Practical-Programs`.
2. Do not initialize it with a README, license or .gitignore because these are already present locally.
3. Extract this ZIP.
4. Open the extracted `FSD_Practicals_15` folder in VS Code (File → Open Folder).
5. Open Terminal → New Terminal. Confirm the terminal is at the root folder containing README.md.
6. Run these commands one by one:

```bash
git --version
git init
git add .
git status
git commit -m "Add all 15 FSD practical programs"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/FSD-Practical-Programs.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and use your actual repository URL.

For later updates:
```bash
git add .
git commit -m "Update practical programs"
git push
```

If Git asks for identity, configure it once:
```bash
git config --global user.name "Your GitHub Name"
git config --global user.email "your-github-email@example.com"
```

If `remote origin already exists`, use:
```bash
git remote set-url origin https://github.com/YOUR-USERNAME/FSD-Practical-Programs.git
```

If GitHub asks you to authenticate, complete the browser sign-in prompt. Never put your password or personal access token inside source code.

Before pushing, check that `.env` and `node_modules/` are not staged. The `.gitignore` file excludes them.
