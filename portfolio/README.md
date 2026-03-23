# Md Shahabuddin — Personal Portfolio

A modern, responsive, dark-themed personal portfolio website for an AI & ML undergraduate.

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main entry point
├── README.md               ← You are here
├── assets/
│   ├── avatar.jpg          ← Add your photo here (optional)
│   └── resume.pdf          ← Add your resume PDF here
├── css/
│   ├── variables.css       ← Design tokens (colors, gradients, spacing)
│   ├── base.css            ← Reset, global styles, buttons, animations
│   ├── navbar.css          ← Navigation bar & mobile drawer
│   ├── hero.css            ← Hero section (avatar, typing, stats)
│   ├── about.css           ← About / Education section
│   ├── skills.css          ← Skills category cards
│   ├── projects.css        ← Project cards + filter buttons
│   ├── github.css          ← GitHub stats & repo cards
│   ├── contact.css         ← Contact form & info links
│   ├── footer.css          ← Footer + social icons
│   └── responsive.css      ← Media queries (tablet + mobile)
└── js/
    ├── theme.js            ← Dark / Light mode toggle
    ├── navbar.js           ← Scroll shadow + mobile hamburger
    ├── typing.js           ← Typewriter animation
    ├── reveal.js           ← Scroll reveal (IntersectionObserver)
    ├── projects.js         ← Project category filter
    ├── github.js           ← GitHub REST API integration
    └── contact.js          ← Contact form + toast notification
```

## 🚀 Getting Started

### Open locally
Just double-click `index.html` — no build tools, no npm, no setup needed.

### Add your photo
1. Place your photo as `assets/avatar.jpg`
2. Inside `index.html`, find `.avatar-inner` and replace the `MS` text with:
   ```html
   <img src="assets/avatar.jpg" alt="Md Shahabuddin" />
   ```

### Add your resume
1. Place your resume PDF as `assets/resume.pdf`
2. The Download Resume button already points to `assets/resume.pdf` via the `download` attribute.

## 🌐 Deployment

### GitHub Pages (Free)
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Free, Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `portfolio/` folder
3. Done — live URL in seconds

### Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside the portfolio folder
3. Follow prompts

## ✨ Features
- 🌗 Dark / Light mode toggle
- ⌨️  Typing animation (5 rotating roles)
- 🎯 Project category filters (All / AI / ML / Web / Python)
- 🐙 GitHub REST API integration with live repo fetch
- 📜 Scroll-reveal animations on every section
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔔 Toast notifications
- 📧 Contact form opens native email client

## 🎨 Customisation

### Colors
Edit `css/variables.css` — all design tokens are in one place.

### Add a new project
Copy a `.project-card` block in `index.html` and update:
- `data-cat` attribute: `ai`, `ml`, `web`, or `python`
- Icon emoji, title, description, stack tags, GitHub link

### Add a new skill category
Copy a `.skill-category` block in `index.html` and update content.

## 📦 Tech Stack
- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Syne + JetBrains Mono + Outfit
- Font Awesome 6.5 (icons)
- GitHub REST API v3 (public, no auth required)

## 📄 License
MIT — free to use and modify.
