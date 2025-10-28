# GitHub Pages Deployment Instructions

## 🚀 Quick Deploy Steps

Your repository is already initialized and committed! Follow these steps:

### 1. Create GitHub Repository

Go to: https://github.com/new

- Choose a repository name (e.g., `programming-resources`)
- Make it **Public** (required for free GitHub Pages)
- **DO NOT** initialize with README, .gitignore, or license
- Click "Create repository"

### 2. Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**: Select `main` branch
5. Select `/ (root)` folder
6. Click **Save**

### 4. Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 📝 Adding New Content

### To add a new README:

1. Create a new HTML file in the appropriate language folder
2. Edit `index.html` to add a new card:

```html
<div class="readme-card" data-lang="java">
    <div class="card-header">
        <span class="lang-badge java">Java</span>
        <span class="date">Updated: 2024</span>
    </div>
    <h2><a href="java/your-file.html">Your Title</a></h2>
    <p>Description of your content...</p>
    <div class="card-footer">
        <span class="views"><i class="fas fa-eye"></i> 0 views</span>
        <a href="java/your-file.html" class="read-btn">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

3. Commit and push:
```bash
git add .
git commit -m "Add new README"
git push
```

## 🎨 Customization

### Colors
Edit the `:root` variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... more variables */
}
```

### Add New Languages

1. Add tab button in `index.html`:
```html
<button class="tab-btn" data-lang="golang">Go</button>
```

2. Add badge style in `styles.css`:
```css
.lang-badge.golang {
    background: #00add8;
    color: white;
}
```

## 📂 Current Structure

```
.
├── index.html              # Main landing page
├── styles.css              # All styling
├── script.js               # JavaScript for filtering
├── README.md               # Documentation
├── java/                   # Java resources
│   ├── basics.html
│   ├── oops.html
│   └── collections.html
├── python/                 # Python resources
├── javascript/             # JavaScript resources
└── cpp/                    # C++ resources
```

## ✅ You're All Set!

Your GitHub Pages site is ready to go. Just follow the steps above to deploy it!


