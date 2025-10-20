<template>
  <section id="skills" class="py-16 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
    <Section3DObject 
      type="torusKnot" 
      color="#3b82f6" 
      :size="5"
      :position="{ x: -18, y: 0, z: -8 }"
    />
    <Section3DObject 
      type="octahedron" 
      color="#06b6d4" 
      :size="4"
      :position="{ x: 18, y: -5, z: -12 }"
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div ref="sectionTitle" class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {{ t('skills.title') }}
        </h2>
        <p class="text-base sm:text-lg text-muted-foreground">{{ t('skills.subtitle') }}</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4"></div>
      </div>

      <div class="max-w-6xl mx-auto space-y-12">
        <!-- Frontend Skills -->
        <div ref="frontendSection">
          <h3 class="text-2xl font-semibold mb-6 text-center md:text-left">
            {{ t('skills.frontend') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div
              v-for="(skill, index) in frontendSkills"
              :key="skill.name"
              :ref="el => { if (el) frontendRefs[index] = el as HTMLElement }"
              class="skill-card group opacity-100"
            >
              <Card class="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 hover:border-primary/50">
                <CardContent class="flex flex-col items-center justify-center p-4 sm:p-6 gap-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <img :src="skill.icon" :alt="skill.name" class="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <span class="text-xs sm:text-sm font-medium text-center">{{ skill.name }}</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div ref="backendSection">
          <h3 class="text-2xl font-semibold mb-6 text-center md:text-left">
            {{ t('skills.backend') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div
              v-for="(skill, index) in backendSkills"
              :key="skill.name"
              :ref="el => { if (el) backendRefs[index] = el as HTMLElement }"
              class="skill-card group opacity-100"
            >
              <Card class="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 hover:border-primary/50">
                <CardContent class="flex flex-col items-center justify-center p-4 sm:p-6 gap-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <img :src="skill.icon" :alt="skill.name" class="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <span class="text-xs sm:text-sm font-medium text-center">{{ skill.name }}</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <!-- Tools & Others -->
        <div ref="toolsSection">
          <h3 class="text-2xl font-semibold mb-6 text-center md:text-left">
            {{ t('skills.tools') }}
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div
              v-for="(skill, index) in toolsSkills"
              :key="skill.name"
              :ref="el => { if (el) toolsRefs[index] = el as HTMLElement }"
              class="skill-card group opacity-100"
            >
              <Card class="h-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 hover:border-primary/50">
                <CardContent class="flex flex-col items-center justify-center p-4 sm:p-6 gap-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <img :src="skill.icon" :alt="skill.name" class="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                  </div>
                  <span class="text-xs sm:text-sm font-medium text-center">{{ skill.name }}</span>
                </CardContent>
              </Card>
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
import { Card, CardContent } from '~/components/ui/card'
import Section3DObject from '~/components/Section3DObject.vue'

const { t } = useI18n()

const sectionTitle = ref<HTMLElement | null>(null)
const frontendSection = ref<HTMLElement | null>(null)
const backendSection = ref<HTMLElement | null>(null)
const toolsSection = ref<HTMLElement | null>(null)

const frontendRefs = ref<HTMLElement[]>([])
const backendRefs = ref<HTMLElement[]>([])
const toolsRefs = ref<HTMLElement[]>([])

const frontendSkills = [
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'VueUse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Vuex', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Pinia', icon: 'https://pinia.vuejs.org/logo.svg' },
  { name: 'ShadcnVue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'GSAP.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
]

const backendSkills = [
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
]

const toolsSkills = [
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

onMounted(() => {
  // Simple animations without ScrollTrigger - all sections visible by default
  setTimeout(() => {
    // Skills are already visible with opacity-100 class
    // Just add subtle entrance animation
    if (frontendRefs.value.length > 0) {
      gsap.from(frontendRefs.value, {
        scale: 0.8,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      })
    }

    if (backendRefs.value.length > 0) {
      gsap.from(backendRefs.value, {
        scale: 0.8,
        duration: 0.6,
        delay: 0.3,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      })
    }

    if (toolsRefs.value.length > 0) {
      gsap.from(toolsRefs.value, {
        scale: 0.8,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      })
    }
  }, 200)
})
</script>

<style scoped>
.skill-card {
  cursor: pointer;
}
</style>
