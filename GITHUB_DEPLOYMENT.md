# GitHub Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name: `simply-natural`
4. Description: `Modern e-commerce website for plants and succulents`
5. Public repository
6. **Don't** initialize with README (we already have one)
7. Click **"Create Repository"**

### Step 2: Initialize Git (First Time Only)

Open terminal in project folder:

```bash
cd "d:\2A Level task\Simply Natural"
git init
git add .
git commit -m "Initial commit: Simply Natural website"
```

### Step 3: Connect to GitHub

Replace `yourusername` with your GitHub username:

```bash
git remote add origin https://github.com/yourusername/simply-natural.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes
7. Your site will be live at: `https://yourusername.github.io/simply-natural`

## 🔄 Update Website (After Changes)

```bash
git add .
git commit -m "Description of changes"
git push
```

Wait 1-2 minutes for changes to appear on live site.

## 📝 Common Git Commands

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### Undo Changes (Before Commit)
```bash
git checkout -- filename.html
```

### View Commit History
```bash
git log --oneline
```

### Create New Branch
```bash
git checkout -b feature-name
```

### Switch Branch
```bash
git checkout main
```

## 🐛 Troubleshooting

### Problem: "fatal: not a git repository"
**Solution:**
```bash
git init
```

### Problem: "remote origin already exists"
**Solution:**
```bash
git remote remove origin
git remote add origin https://github.com/yourusername/simply-natural.git
```

### Problem: "Permission denied"
**Solution:** Set up SSH key or use HTTPS with personal access token

### Problem: "Changes not showing on live site"
**Solution:** 
- Wait 2-3 minutes
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for deployment status

## 🌐 Alternative Deployment Options

### Netlify (Easiest)

1. Go to [Netlify](https://netlify.com)
2. Sign up/Login
3. Drag & drop project folder
4. Site deploys automatically
5. Get custom URL: `yoursite.netlify.app`

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Import GitHub repository
3. Deploy automatically
4. Get custom URL: `yoursite.vercel.app`

### Traditional Hosting (cPanel/FTP)

1. Get hosting account
2. Upload all files via FTP
3. Ensure `index.html` is in root
4. Access via your domain

## 📋 Pre-Deployment Checklist

- [ ] Test all pages locally
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test responsive design
- [ ] Check cart functionality
- [ ] Update contact information
- [ ] Add your social media links
- [ ] Update README.md with your info
- [ ] Test forms
- [ ] Check browser console for errors

## 🔐 Security Best Practices

1. **Never commit:**
   - API keys
   - Passwords
   - Database credentials
   - Personal information

2. **Use .gitignore:**
   - Already created for you
   - Excludes sensitive files

3. **Environment Variables:**
   - For production, use environment variables
   - Don't hardcode sensitive data

## 📊 GitHub Repository Settings

### Recommended Settings:

1. **About Section:**
   - Description: "Modern e-commerce website for plants"
   - Website: Your live URL
   - Topics: `html`, `css`, `javascript`, `bootstrap`, `ecommerce`, `plants`

2. **Branch Protection:**
   - Protect main branch
   - Require pull request reviews

3. **Issues:**
   - Enable issues for bug tracking

4. **Discussions:**
   - Enable for community feedback

## 🎯 Post-Deployment

### Share Your Site:

1. **Update README.md:**
   - Add live demo link
   - Add screenshots
   - Update author info

2. **Social Media:**
   - Share on LinkedIn
   - Tweet about it
   - Post on portfolio

3. **Portfolio:**
   - Add to your portfolio website
   - Include in resume

## 📈 Analytics (Optional)

### Add Google Analytics:

Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔗 Custom Domain (Optional)

### Add Custom Domain to GitHub Pages:

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add CNAME record pointing to: `yourusername.github.io`
3. In GitHub Settings → Pages → Custom domain
4. Enter your domain
5. Enable HTTPS

## ✅ Success!

Your website is now live! 🎉

**Live URL:** `https://yourusername.github.io/simply-natural`

### Next Steps:

1. Share with friends
2. Add to portfolio
3. Keep updating
4. Monitor analytics
5. Fix bugs
6. Add features

---

**Need Help?** Open an issue on GitHub or check the documentation.
