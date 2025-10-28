# Java Programming Resources - GitHub Pages

A modern, responsive website dedicated to Java programming tutorials, guides, and documentation.

## 🚀 Getting Started

### Features

- **Clean, Modern UI**: Beautiful gradient header with clean card-based layout
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Java Focus**: Dedicated to Java programming with comprehensive tutorials
- **Easy to Extend**: Simple structure to add new READMEs and languages

### Project Structure

```
.
├── index.html          # Main page
├── styles.css          # All styling
├── script.js           # JavaScript for filtering
├── README.md           # This file
└── java/               # Java resources
    ├── basics.html
    ├── oops.html
    └── collections.html
```

## 📝 How to Add New READMEs

1. **Create a new Java tutorial** in the `java/` folder

2. **Create an HTML file** for your README:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Your Title</title>
       <link rel="stylesheet" href="../styles.css">
   </head>
   <body>
       <article class="container">
           <h1>Your Title</h1>
           <!-- Your README content here -->
       </article>
   </body>
   </html>
   ```

3. **Add a card** to `index.html` in the `.readme-grid` div:
   ```html
   <div class="readme-card" data-lang="java">
       <!-- Card content -->
   </div>
   ```

## 🌐 Publishing to GitHub Pages

1. **Initialize a Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to GitHub and create a new repository
   - Don't initialize with README (you already have files)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages**
   - Under **Source**, select the `main` branch and `/ (root)` folder
   - Click **Save**

5. **Access your site**:
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main color */
    --secondary-color: #1e40af;     /* Secondary color */
    --background: #f8fafc;          /* Background color */
    /* ... more variables */
}
```

### Adding New Languages

1. Add a new tab button in the navigation:
   ```html
   <button class="tab-btn" data-lang="golang">Go</button>
   ```

2. Add a new language badge style in `styles.css`:
   ```css
   .lang-badge.golang {
       background: #00add8;
       color: white;
   }
   ```

## 📦 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Simple filtering functionality
- **Font Awesome**: Icons

## 🤝 Contributing

Feel free to add more content and improve the design!

## 📄 License

This project is open source and available under the MIT License.

