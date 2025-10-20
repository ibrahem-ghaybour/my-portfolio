<template>
  <section id="about" class="py-16 md:py-20 lg:py-32 relative">
    <Section3DObject 
      type="icosahedron" 
      color="#8b5cf6" 
      :size="6"
      :position="{ x: 15, y: 5, z: -10 }"
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div ref="sectionTitle" class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {{ t('about.title') }}
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Profile Section -->
        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-8">
          <!-- Profile Photo -->
          <div ref="profileImage" class="relative flex-shrink-0">
            <div class="relative w-48 h-48 md:w-56 md:h-56">
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              
              <!-- Photo with gradient border -->
              <div class="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-blue-500 p-1">
                <img 
                  src="/images/myPhoto.jpeg" 
                  alt="Ibrahim Marwan Ghaybour"
                  class="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <!-- Content -->
          <div ref="content" class="flex-1 space-y-4">
            <p class="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {{ t('about.description') }}
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div ref="stat1" class="text-center p-3 sm:p-4 rounded-lg bg-muted/50">
            <div class="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2+</div>
            <div class="text-xs sm:text-sm text-muted-foreground">{{ t('about.experience') }}</div>
          </div>
          <div ref="stat2" class="text-center p-3 sm:p-4 rounded-lg bg-muted/50">
            <div class="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
            <div class="text-xs sm:text-sm text-muted-foreground">{{ t('about.projects') }}</div>
          </div>
          <div ref="stat3" class="text-center p-3 sm:p-4 rounded-lg bg-muted/50">
            <div class="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">10+</div>
            <div class="text-xs sm:text-sm text-muted-foreground">{{ t('about.clients') }}</div>
          </div>
        </div>

        <!-- Rest of content -->
        <div class="space-y-6">

          <!-- Work Experience -->
          <div class="space-y-4 pt-6">
            <h3 class="text-2xl font-semibold text-foreground mb-4">{{ t('about.workExperience') }}</h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Genwin -->
              <div class="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div class="flex items-start gap-3 mb-3">
                  <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase class="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-foreground">{{ t('about.genwin') }}</h4>
                  </div>
                </div>
                <p class="text-sm text-muted-foreground leading-relaxed">{{ t('about.genwinDesc') }}</p>
              </div>
              
              <!-- Freelance -->
              <div class="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div class="flex items-start gap-3 mb-3">
                  <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Code2 class="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 class="font-semibold text-foreground">{{ t('about.freelance') }}</h4>
                  </div>
                </div>
                <p class="text-sm text-muted-foreground leading-relaxed">{{ t('about.freelanceDesc') }}</p>
              </div>
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
import { Code2, Briefcase } from 'lucide-vue-next'
import Section3DObject from '~/components/Section3DObject.vue'

const { t } = useI18n()

const sectionTitle = ref<HTMLElement | null>(null)
const profileImage = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const stat1 = ref<HTMLElement | null>(null)
const stat2 = ref<HTMLElement | null>(null)
const stat3 = ref<HTMLElement | null>(null)

onMounted(() => {
  // Simple fade-in animations without ScrollTrigger
  setTimeout(() => {
    if (sectionTitle.value) {
      gsap.to(sectionTitle.value, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }

    if (profileImage.value) {
      gsap.to(profileImage.value, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: 'back.out(1.2)'
      })
    }

    if (content.value) {
      gsap.to(content.value, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      })
    }

    if (stat1.value && stat2.value && stat3.value) {
      gsap.to([stat1.value, stat2.value, stat3.value], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })
    }
  }, 200)

  // Counter animation for stats (simple version without ScrollTrigger)
  const animateCounter = (element: HTMLElement | null, target: number, delay: number) => {
    if (!element) return
    const counter = { value: 0 }
    gsap.to(counter, {
      value: target,
      duration: 2,
      delay: delay,
      ease: 'power1.out',
      onUpdate: () => {
        const numberElement = element.querySelector('.text-2xl, .text-3xl')
        if (numberElement) {
          numberElement.textContent = Math.floor(counter.value) + '+'
        }
      }
    })
  }

  setTimeout(() => {
    animateCounter(stat1.value, 2, 0.8)
    animateCounter(stat2.value, 15, 1)
    animateCounter(stat3.value, 10, 1.2)
  }, 200)
})
</script>
