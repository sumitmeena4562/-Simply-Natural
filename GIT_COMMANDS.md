# Git Commands Quick Reference

## 🚀 First Time Setup

```bash
# Navigate to project folder
cd "d:\2A Level task\Simply Natural"

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Simply Natural website"

# Connect to GitHub (replace yourusername)
git remote add origin https://github.com/yourusername/simply-natural.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🔄 Daily Workflow

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Updated homepage design"

# Push to GitHub
git push
```

## 📝 Common Commands

### View Changes
```bash
git diff                    # See what changed
git log --oneline          # View commit history
```

### Undo Changes
```bash
git checkout -- file.html  # Undo changes to file
git reset HEAD file.html   # Unstage file
git reset --hard HEAD      # Undo all changes (careful!)
```

### Branches
```bash
git branch                 # List branches
git branch feature-name    # Create branch
git checkout feature-name  # Switch branch
git checkout -b new-branch # Create and switch
git merge feature-name     # Merge branch
git branch -d feature-name # Delete branch
```

### Remote
```bash
git remote -v              # View remote URLs
git pull                   # Get latest changes
git push                   # Upload changes
```

## 🎯 Quick Updates

### Update Single File
```bash
git add index.html
git commit -m "Updated home page"
git push
```

### Update Multiple Files
```bash
git add style.css app.js
git commit -m "Updated styles and functionality"
git push
```

### Update Everything
```bash
git add .
git commit -m "Major update"
git push
```

## 🐛 Fix Mistakes

### Wrong Commit Message
```bash
git commit --amend -m "Correct message"
git push --force
```

### Forgot to Add File
```bash
git add forgotten-file.html
git commit --amend --no-edit
git push --force
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Delete Changes)
```bash
git reset --hard HEAD~1
```

## 📊 Useful Commands

```bash
# See file changes
git diff file.html

# See who changed what
git blame file.html

# Search commits
git log --grep="search term"

# See changes in commit
git show commit-hash

# Clean untracked files
git clean -fd
```

## 🔐 Setup Git Config

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# View config
git config --list
```

## 💡 Pro Tips

1. **Commit Often:** Small, frequent commits are better
2. **Good Messages:** Write clear commit messages
3. **Pull Before Push:** Always pull before pushing
4. **Test First:** Test changes before committing
5. **Use .gitignore:** Don't commit unnecessary files

## 🎨 Commit Message Format

```bash
# Good examples:
git commit -m "Add contact form validation"
git commit -m "Fix navbar mobile responsiveness"
git commit -m "Update product images"
git commit -m "Remove duplicate CSS code"

# Bad examples:
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
```

## 🚨 Emergency Commands

### Completely Reset to Last Commit
```bash
git reset --hard HEAD
git clean -fd
```

### Get Latest from GitHub (Overwrite Local)
```bash
git fetch origin
git reset --hard origin/main
```

### Remove File from Git (Keep Local)
```bash
git rm --cached file.html
```

## 📱 GitHub Desktop Alternative

Don't like command line? Use [GitHub Desktop](https://desktop.github.com):

1. Download and install
2. Sign in to GitHub
3. Add repository
4. Make changes
5. Commit and push with GUI

## ✅ Checklist Before Push

- [ ] Test all changes locally
- [ ] Check for console errors
- [ ] Write clear commit message
- [ ] Review changed files
- [ ] Pull latest changes first
- [ ] Push to GitHub

---

**Remember:** Git is your friend! Don't be afraid to commit often. 🎉
