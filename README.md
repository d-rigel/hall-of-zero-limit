````markdown
# 🌟 Wakanda Forever: Hall of Zero Limits

A cinematic, immersive web experience recreating the "Hall of Zero Limits" from Marvel's Black Panther: Wakanda Forever. Built as a front-end developer trial task showcasing advanced React development, scroll-driven animations, and creative problem-solving.

## 🚀 Live Demo

**Production:** [https://your-project.vercel.app](https://your-project.vercel.app)

## ✨ Features

### Core Experience

- 🎬 **Cinematic Loading Screen** - Animated entry with smooth transitions
- 📜 **Scroll-Driven Animations** - Synchronized element transitions using Framer Motion
- 🎨 **Wakandan Aesthetic** - Art Deco + Afrofuturism design with signature green color palette
- 🎭 **Creative 3D Replacement** - Canvas particle system with parallax effects
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile

### Interactive Elements

- 🎥 **Video Gallery** - Watch content with progress tracking
- 📖 **Inspiration Garden** - Multi-page storytelling experience with quotes
- 🧭 **Branching Quiz System** - Interactive personality quiz with multiple paths
- 🍔 **Navigation Menu** - Smooth overlay menu with section navigation
- ✅ **Progress Tracking** - Mark videos watched and quotes read

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 6.0
- **Routing:** React Router DOM 7.1
- **State Management:** Zustand 5.0
- **Animations:** Framer Motion 11.15
- **Styling:** Tailwind CSS 4.0
- **Icons:** Lucide React 0.468

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/wakanda-hall-zero-limits.git

# Navigate to project directory
cd wakanda-hall-zero-limits

# Install dependencies
npm install

# Start development server
npm run dev
```
````

The app will be running at `http://localhost:5173`

## 🏗️ Build & Deploy

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Deploy to Vercel (if Vercel CLI is installed)
vercel --prod
```

## 📂 Project Structure

```
wakanda-hall-zero-limits/
├── src/
│   ├── components/          # Reusable components
│   │   ├── LoadingScreen.jsx
│   │   ├── NavigationArrows.jsx
│   │   ├── HamburgerMenu.jsx
│   │   ├── VideoPlayer.jsx
│   │   ├── QuizQuestion.jsx
│   │   └── QuizResult.jsx
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx
│   │   ├── StoryScreen.jsx
│   │   ├── VideoGallery.jsx
│   │   ├── InspirationGarden.jsx
│   │   └── QuizFlow.jsx
│   ├── store/              # Zustand state management
│   │   └── useStore.js
│   ├── data/               # Static data
│   │   ├── quizData.js
│   │   ├── videos.js
│   │   └── quotes.js
│   ├── utils/              # Utility functions
│   │   └── animations.js
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary Green:** `#3fdc77` - Wakandan signature color
- **White:** `#ffffff` - Text and accents
- **Dark Background:** `#0a0a0f` - Primary background
- **Secondary Dark:** `#1a1a2e` - Cards and panels

### Typography

- **Headings:** Bold, large-scale typography
- **Body:** Clean, readable spacing
- **Accents:** Tracking-widest for futuristic feel

## 🎯 Key Technical Decisions

### 1. Scroll-Driven Animation Architecture

Using Framer Motion's `useScroll` and `useTransform` hooks for declarative scroll animations:

```javascript
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
```

### 2. State Management with Zustand

Lightweight state management (100 bytes vs Redux's 6KB) for:

- Navigation state
- Quiz progress and history
- Completion tracking (watched/read status)

### 3. Canvas Particle System

Custom particle animation replacing complex 3D models while maintaining cinematic atmosphere.

### 4. Data-Driven Quiz System

Branching quiz logic implemented as a lookup table, making it scalable and maintainable.

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🎥 Video Walkthrough

[Link to Video Demo](https://drive.google.com/your-video-link)

_3-minute walkthrough covering project demonstration, architecture decisions, and technical highlights._

## 🚧 Future Enhancements

- [ ] Three.js integration for advanced 3D particles
- [ ] Sound design with Wakandan-themed ambient music
- [ ] Enhanced mobile gestures (swipe navigation)
- [ ] Keyboard navigation and ARIA labels for accessibility
- [ ] LocalStorage for progress persistence
- [ ] Analytics integration for user behavior tracking
- [ ] Additional quiz paths with more personality results

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- Advanced React patterns (hooks, context, composition)
- Scroll-based animation techniques
- State management at scale
- Performance optimization
- Modern deployment practices (CI/CD)
- Creative problem-solving (3D replacement)
- Clean code architecture

## 📄 License

This project was created as a trial task for a front-end developer position. Inspired by Marvel's Black Panther: Wakanda Forever.

## 🙏 Acknowledgments

- **Original Site:** Dogstudio's Wakanda Forever experience
- **Design Inspiration:** Marvel Studios, Afrofuturism aesthetic
- **Animation Library:** Framer Motion team
- **Icons:** Lucide React

## 👤 Author

**[Nnadozie Emmanuel Alozie]**

- Email: alozie4God@gmail.com
