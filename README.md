# Portfolio Website

A minimalistic, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase my skills, projects, and academic background as a Software Engineering student at FAST-NUCES.

## 🚀 Live Demo

[View Live Site](https://your-deployment-url.vercel.app) *(Update after deployment)*

## 📸 Preview

A clean, professional portfolio featuring:
- Personal introduction and background
- Education and certifications
- Technical skills organized by category
- Academic and personal projects
- Contact form and social links

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Interactive contact form with state management
- ✅ Project showcase with GitHub links
- ✅ Clean, minimalistic design
- ✅ Fast performance with Vite
- ✅ SEO-friendly structure

## 🎨 Sections

1. **Header** - Sticky navigation with scroll effects
2. **About** - Personal introduction and profile picture
3. **Education** - Academic background and certifications
4. **Skills** - Technical skills categorized by domain
5. **Projects** - University and personal projects
6. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/01-bandit/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment

This project is configured for easy deployment on:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## 📂 Project Structure

```
portfolio-website/
├── public/
│   └── profile.jpg          # Profile picture
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation component
│   │   ├── About.jsx        # About section
│   │   ├── Education.jsx    # Education section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Projects.jsx     # Projects gallery
│   │   └── Contact.jsx      # Contact form
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎓 React Concepts Used

This portfolio demonstrates key React concepts:

- **Components** - Modular, reusable UI components
- **useState Hook** - State management for mobile menu and contact form
- **useEffect Hook** - Side effects for scroll detection and event listeners
- **Props** - Data passing between components
- **Event Handling** - Form submissions, button clicks
- **Conditional Rendering** - Mobile menu toggle, form submission states
- **Lists & Keys** - Dynamic rendering of skills and projects
- **Controlled Components** - Form input handling

See [REACT_CONCEPTS_GUIDE.md](REACT_CONCEPTS_GUIDE.md) for detailed explanations.

## 🎨 Customization

### Update Personal Information

1. **About Section** (`src/components/About.jsx`)
   - Edit name, bio, and description
   - Replace `public/profile.jpg` with your photo

2. **Education** (`src/components/Education.jsx`)
   - Update degree, institution, and highlights

3. **Skills** (`src/components/Skills.jsx`)
   - Modify the `skillCategories` array

4. **Projects** (`src/components/Projects.jsx`)
   - Update the `projects` array with your projects

5. **Contact** (`src/components/Contact.jsx`)
   - Update email and social media links

### Color Scheme

Edit `tailwind.config.js` to change colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e3a8a',    // Navy blue
      secondary: '#3b82f6',  // Bright blue
    },
  },
}
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Muhammad Hammad ur Rehman**

- GitHub: [@01-bandit](https://github.com/01-bandit)
- LinkedIn: [Muhammad Hammad ur Rehman](https://www.linkedin.com/in/muhammad-hammad-ur-rehman-6133b9276/)
- Email: hammadurrehman.m.h@gmail.com

## 🙏 Acknowledgments

- Built as a portfolio for job applications
- Inspired by modern, minimalistic portfolio designs
- Created to demonstrate React skills for potential employers

---

⭐ If you found this helpful, please give it a star!
