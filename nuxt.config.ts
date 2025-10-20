import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      charset: 'utf-8',
      title: 'Ibrahim Marwan Ghaybour - Front-End Web Developer',
      meta: [
        { name: 'description', content: 'Professional portfolio of Ibrahim Marwan Ghaybour - Front-End Web Developer with 2+ years of experience specializing in Vue.js, Nuxt.js, Tailwind CSS, and modern web technologies.' },
        { name: 'keywords', content: 'Ibrahim Ghaybour, Front-End Developer, Web Developer, Vue.js, Nuxt.js, Tailwind CSS, JavaScript, TypeScript, Portfolio' },
        { name: 'author', content: 'Ibrahim Marwan Ghaybour' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Ibrahim Marwan Ghaybour - Front-End Web Developer' },
        { property: 'og:description', content: 'Professional portfolio showcasing modern web development projects with 2+ years of experience in Vue.js, Nuxt.js, and responsive web applications.' },
        { property: 'og:image', content: '/og-image.svg' },
        { property: 'og:url', content: 'https://your-domain.com' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ibrahim Marwan Ghaybour - Front-End Web Developer' },
        { name: 'twitter:description', content: 'Professional portfolio showcasing modern web development projects with 2+ years of experience in Vue.js, Nuxt.js, and responsive web applications.' },
        { name: 'twitter:image', content: '/og-image.svg' },
        
        // Theme color
        { name: 'theme-color', content: '#6366f1' },
        { name: 'msapplication-TileColor', content: '#6366f1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.svg' },
        { rel: 'canonical', href: 'https://your-domain.com' }
      ]
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', dir: 'ltr' },
      { code: 'ar', iso: 'ar-SA', name: 'العربية', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
      escapeHtml: false
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['swiper/vue', 'swiper/modules']
    }
  },
  build: {
    transpile: ['swiper']
  }
})