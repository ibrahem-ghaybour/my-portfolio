<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
    <!-- 3D Background -->
    <ThreeBackground />
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Greeting -->
        <div ref="greeting" class="opacity-0">
          <p class="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 md:mb-4">
            {{ t('hero.greeting') }}
          </p>
        </div>

        <!-- Name -->
        <div ref="name" class="opacity-0">
          <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Ibrahim Ghaybour
          </h1>
        </div>

        <!-- Title -->
        <div ref="title" class="opacity-0">
          <h2 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-foreground/90">
            {{ t('hero.title') }}
          </h2>
        </div>

        <!-- Subtitle -->
        <div ref="subtitle" class="opacity-0">
          <p class="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            {{ t('hero.subtitle') }}
          </p>
        </div>

        <!-- CTA Buttons -->
        <div ref="cta" class="opacity-0 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center px-4">
          <Button size="lg" class="group w-full sm:w-auto" @click="scrollToSection('projects')">
            {{ t('hero.cta') }}
            <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" class="w-full sm:w-auto" @click="scrollToSection('contact')">
            {{ t('hero.contact') }}
          </Button>
        </div>

        <!-- Scroll Indicator -->
        <div ref="scrollIndicator" class="opacity-0 mt-16">
          <div class="inline-flex flex-col items-center gap-2 cursor-pointer" @click="scrollToSection('about')">
            <span class="text-sm text-muted-foreground">{{ locale === 'ar' ? 'مرر للأسفل' : 'Scroll Down' }}</span>
            <div class="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
              <div ref="scrollDot" class="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-vue-next'
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
