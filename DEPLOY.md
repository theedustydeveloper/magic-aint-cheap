# 🚀 Quick Deployment Guide

## Option 1: Netlify Drop (Easiest - 2 minutes)

1. **Prepare the folder:**
   - Download and extract the entire `magic-aint-cheap` folder
   - Keep all files and folder structure intact

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Sign up/login (free account)
   - Drag the entire `magic-aint-cheap` folder into the drop zone
   - Wait 30 seconds
   - Your site is live! 🎉

3. **Get your URL:**
   - Netlify will give you a URL like: `https://random-name-12345.netlify.app`
   - Click "Site settings" → "Change site name" to customize it
   - Example: `magic-aint-cheap.netlify.app`

## Option 2: Netlify + GitHub (Best for updates)

1. **Upload to GitHub:**
   ```bash
   cd magic-aint-cheap
   git init
   git add .
   git commit -m "Initial commit - Magic Ain't Cheap website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/magic-aint-cheap.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: *leave blank*
     - Publish directory: `.` (or leave blank)
   - Click "Deploy site"

3. **Auto-deploy:**
   - Every time you push to GitHub, Netlify auto-deploys
   - Update cards → commit → push → live in 30 seconds!

## Option 3: Other Hosting (Vercel, GitHub Pages, etc.)

This is a static site - it works anywhere!

**Vercel:**
- Similar to Netlify
- Go to https://vercel.com
- Import your GitHub repo
- Deploy!

**GitHub Pages:**
- Push to GitHub
- Settings → Pages → Source: main branch
- Your site: `https://YOUR-USERNAME.github.io/magic-aint-cheap/`

## 📝 Testing Locally

Want to test before deploying?

**Option A: Python Server**
```bash
cd magic-aint-cheap
python3 -m http.server 8000
# Open: http://localhost:8000
```

**Option B: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## 🔧 Customization

### Update Card Data
Edit JSON files in `data/` folder:
- `rewards.json` - Add/edit reward cards
- `challenges.json` - Add/edit challenges
- `monsters.json` - Add/edit monsters
- `environments.json` - Add/edit environments
- `treasure.json` - Add/edit treasure cards

### Change Colors
Edit `css/style.css`:
```css
:root {
    --primary-purple: #8b4be3;  /* Change this */
    --primary-orange: #ff6b35;  /* And this */
    /* ... */
}
```

### Add Pages
1. Create new HTML file (e.g., `strategy.html`)
2. Copy header/nav from any existing page
3. Add link to nav in all pages:
   ```html
   <li><a href="strategy.html">Strategy</a></li>
   ```

## ✅ Checklist Before Deploying

- [ ] All HTML files open correctly
- [ ] Tables load data (check browser console for errors)
- [ ] Modals open when clicking table rows
- [ ] Navigation works between pages
- [ ] Mobile responsive (test on phone or resize browser)
- [ ] Custom site name set on Netlify

## 🐛 Troubleshooting

**Tables not loading data:**
- Check browser console (F12) for errors
- Verify JSON files are in `data/` folder
- Make sure file paths are correct

**Styles not loading:**
- Verify `css/style.css` exists
- Check `<link>` tags in HTML files
- Hard refresh browser (Ctrl+Shift+R)

**Modals not working:**
- Verify `js/main.js` exists
- Check browser console for JavaScript errors
- Make sure jQuery and DataTables CDN links work

## 📧 Need Help?

- Check README.md for more info
- Netlify docs: https://docs.netlify.com
- DataTables docs: https://datatables.net

---

**Ready to deploy? Let's go! 🎮**
