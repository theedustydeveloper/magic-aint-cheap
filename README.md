# Magic Ain't Cheap - Website

Official website for the board game **Magic Ain't Cheap: The Gauntlet**.

## 🎮 About the Game

Magic Ain't Cheap is a 1-4 player cooperative board game set in a dystopian game show where magic is currency. Players must survive three brutal Floors of deadly Challenges, managing their Gold economy and dice pool while battling monsters and overcoming obstacles.

## 🚀 Deployment

### Netlify Deployment (Recommended)

1. **Drag & Drop Method:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire project folder into the drop zone
   - Your site will be live in seconds!

2. **Git Method:**
   - Push this folder to a GitHub repository
   - Connect your repo to Netlify
   - Netlify will auto-deploy on every push

### Configuration

No build process needed! This is a static site that works out of the box.

**Site Structure:**
- `index.html` - Homepage
- `rules.html` - Full rulebook
- `glossary.html` - Game terms glossary
- `rewards.html` - Reward cards deck
- `challenges.html` - Challenges, monsters, and environments
- `treasure.html` - Treasure deck
- `css/` - Stylesheets (ArcanePunk theme)
- `js/` - JavaScript for modals and interactivity
- `data/` - JSON files with card data

## 🎨 Theme

**ArcanePunk Design:**
- Colors: Purple (#8b4be3) and Orange (#ff6b35) with neon accents
- Style: Metal, grease, leather with magic neon elements
- Responsive design for mobile and desktop

## 📦 Features

- ✅ Sortable/filterable card tables (using DataTables.js)
- ✅ Modal popups for detailed card views
- ✅ Custom card design layouts
- ✅ Responsive navigation
- ✅ Full rulebook with formatted sections
- ✅ Glossary with 87+ game terms
- ✅ Mobile-friendly design

## 🔧 Technologies

- **HTML5** - Structure
- **CSS3** - Styling (custom ArcanePunk theme)
- **Vanilla JavaScript** - Modal functionality
- **jQuery & DataTables.js** - Table sorting/filtering
- **JSON** - Card data storage

## 📝 Adding New Cards

To add new cards, edit the JSON files in the `data/` folder:

- `data/rewards.json` - Reward cards
- `data/challenges.json` - Challenge cards
- `data/monsters.json` - Monster cards
- `data/environments.json` - Environment cards
- `data/treasure.json` - Treasure cards

The tables will automatically update when you reload the page.

## 🌐 CDN Dependencies

- jQuery 3.7.0
- DataTables 1.13.6

These are loaded from CDNs, so an internet connection is required for full functionality.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Future Enhancements

Ideas for later:
- Card image generation with AI
- WebGL card animations
- Deck builder tool
- Print-friendly layouts
- PDF export

## 📄 License

Game content and website © 2025 Dustin. All rights reserved.

---

**The show is about to begin. Good luck, contestant!**
