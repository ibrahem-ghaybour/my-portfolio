<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
    <!-- Enhanced 3D Background -->
    <ThreeBackground />
    
    <!-- Animated Gradient Overlay -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 animate-pulse"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
    <div class="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed"></div>
    <div class="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
    
    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Enhanced Greeting -->
        <div ref="greeting" class="opacity-0">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p class="text-sm sm:text-base font-medium text-primary">
              {{ t('hero.greeting') }}
            </p>
          </div>
        </div>

        <!-- Enhanced Name with Glow Effect -->
        <div ref="name" class="opacity-0 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 blur-3xl opacity-20 scale-110"></div>
          <h1 class="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight">
            Ibrahim Ghaybour
          </h1>
        </div>

        <!-- Enhanced Title with Typing Effect -->
        <div ref="title" class="opacity-0 mb-6 md:mb-8">
          <div class="relative inline-block">
            <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground/95">
              {{ t('hero.title') }}
            </h2>
            <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        <!-- Enhanced Subtitle -->
        <div ref="subtitle" class="opacity-0 mb-8 md:mb-12">
          <p class="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
            {{ t('hero.subtitle') }}
          </p>
        </div>

        <!-- Enhanced CTA Buttons -->
        <div ref="cta" class="opacity-0 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center px-4 mb-12">
          <Button 
            size="lg" 
            class="group relative overflow-hidden w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
            @click="scrollToSection('projects')"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ t('hero.cta') }}
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            class="group w-full sm:w-auto px-8 py-4 text-base font-semibold border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 transform hover:scale-105" 
            @click="scrollToSection('contact')"
          >
            <span class="flex items-center gap-2">
              {{ t('hero.contact') }}
              <div class="w-5 h-5 rounded-full border-2 border-current group-hover:scale-110 transition-transform duration-300"></div>
            </span>
          </Button>
        </div>

        <!-- Enhanced Scroll Indicator -->
        <div ref="scrollIndicator" class="opacity-0 mt-16">
          <div class="inline-flex flex-col items-center gap-3 cursor-pointer group" @click="scrollToSection('about')">
            <span class="text-sm text-muted-foreground/80 group-hover:text-foreground transition-colors duration-300">
              {{ locale === 'ar' ? 'مرر للأسفل' : 'Scroll Down' }}
            </span>
            <div class="relative">
              <div class="w-6 h-12 border-2 border-muted-foreground/30 group-hover:border-primary/50 rounded-full transition-colors duration-300"></div>
              <div ref="scrollDot" class="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-b from-primary to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Links Floating -->
    <div class="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4">
      <a 
        href="https://github.com/ibrahem-ghaybour" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
      >
        <Github class="w-5 h-5" />
      </a>
      <a 
        href="https://www.linkedin.com/in/ibrahim-ghaybour-2b999a299/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
      >
        <Linkedin class="w-5 h-5" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ArrowRight, Github, Linkedin } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import ThreeBackground from '~/components/ThreeBackground.vue'

const { t, locale } = useI18n()

const greeting = ref<HTMLElement | null>(null)
const name = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const cta = ref<HTMLElement | null>(null)
const scrollIndicator = ref<HTMLElement | null>(null)
const scrollDot = ref<HTMLElement | null>(null)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  // Create timeline for sequential animations
  const tl = gsap.timeline({ delay: 0.5 })

  tl.to(greeting.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .to(name.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to(title.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to(subtitle.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to(cta.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to(scrollIndicator.value, {
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')

  // Animate scroll indicator dot
  gsap.to(scrollDot.value, {
    y: 20,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  })
})
</script>
