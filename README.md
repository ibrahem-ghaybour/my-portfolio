# My Portfolio

## Professional Portfolio

A modern, fully-featured professional portfolio built with Nuxt 3, Vue 3, shadcn-vue, GSAP animations, and bilingual support (Arabic/English).

## ✨ Features

- 🎨 **Modern UI**: Built with shadcn-vue components and Tailwind CSS
- 🌓 **Theme Switching**: Light, Dark, and System themes
- 🌍 **Bilingual**: Full support for English and Arabic (RTL)
- ✨ **GSAP Animations**: Professional scroll-triggered and interactive animations
- 🎭 **3D Effects**: Three.js powered 3D background with particles and geometric shapes
- 🃏 **3D Card Interactions**: Mouse-reactive tilt and shine effects
- 🖱️ **Custom Cursor**: Beautiful animated cursor with hover effects
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Nuxt 3 and optimized for speed with GPU acceleration
- 🎯 **SEO Ready**: Proper meta tags and semantic HTML
- 🌟 **Amazing Animations**: Particle systems, floating shapes, and dynamic lighting

## 🚀 Tech Stack

- **Framework**: Nuxt 3
- **UI Library**: shadcn-vue
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js
- **Animations**: GSAP with ScrollTrigger
- **Icons**: Lucide Vue Next
- **Internationalization**: @nuxtjs/i18n
- **Theme**: @nuxtjs/color-mode
- **TypeScript**: Full type safety

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `app/components/sections/HeroSection.vue`
   - Update your name, title, and description
   
2. **About Section**: Edit `app/components/sections/AboutSection.vue`
   - Update your bio and statistics
   
3. **Skills Section**: Edit `app/components/sections/SkillsSection.vue`
   - Add/remove skills and technologies
   
4. **Projects Section**: Edit `app/components/sections/ProjectsSection.vue`
   - Add your actual projects with links
   
5. **Contact Section**: Edit `app/components/sections/ContactSection.vue`
   - Update contact information and social links

### Translations

Update translations in:
- `app/locales/en.json` - English translations
- `app/locales/ar.json` - Arabic translations

### Theme Colors

Customize colors in `app/assets/css/tailwind.css`:
- Light mode colors in `:root`
- Dark mode colors in `.dark`

## 📁 Project Structure

```
myPortfolio/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css          # Tailwind configuration
│   ├── components/
│   │   ├── sections/                 # Page sections
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── SkillsSection.vue
│   │   │   ├── ProjectsSection.vue
│   │   │   └── ContactSection.vue
│   │   ├── ui/                       # shadcn-vue components
│   │   ├── CustomCursor.vue          # Custom cursor component
│   │   ├── Navigation.vue            # Navigation bar
│   │   └── Footer.vue                # Footer component
│   ├── locales/                      # i18n translations
│   │   ├── en.json
│   │   └── ar.json
│   ├── pages/
│   │   └── index.vue                 # Main page
│   └── app.vue                       # Root component
├── i18n.config.ts                    # i18n configuration
├── nuxt.config.ts                    # Nuxt configuration
└── package.json                      # Dependencies
```

## 🎯 Features Breakdown

### Custom Cursor
- Smooth follow animation
- Hover effects on interactive elements
- Automatically disabled on mobile devices

### GSAP Animations
- Scroll-triggered animations for all sections
- Staggered animations for cards and items
- Smooth transitions and easing
- Floating background shapes in hero section

### Theme Switching
- Light mode
- Dark mode
- System preference detection
- Smooth transitions between themes

### Bilingual Support
- English (LTR)
- Arabic (RTL)
- Automatic direction switching
- Persistent language preference

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly on mobile
- Optimized navigation for small screens

## 🔧 Configuration

### Add More Languages

1. Create a new locale file in `app/locales/`
2. Update `nuxt.config.ts` to include the new locale
3. Import the locale in `i18n.config.ts`

### Add More Themes

Extend the color mode options in `app/components/Navigation.vue` and add corresponding CSS variables in `tailwind.css`.

## 📝 License

MIT License - feel free to use this portfolio for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Ibrahim Ghaybour**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

Built with ❤️ using Nuxt 3, Vue 3, and GSAPfolio
