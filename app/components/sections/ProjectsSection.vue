<template>
  <section id="projects" class="py-16 md:py-20 lg:py-32 relative overflow-hidden">
    <Section3DObject 
      type="dodecahedron" 
      color="#a855f7" 
      :size="5"
      :position="{ x: -15, y: 8, z: -10 }"
    />
    <Section3DObject 
      type="sphere" 
      color="#ec4899" 
      :size="3"
      :position="{ x: 20, y: -8, z: -15 }"
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div ref="sectionTitle" class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {{ t('projects.title') }}
        </h2>
        <p class="text-base sm:text-lg text-muted-foreground">{{ t('projects.subtitle') }}</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4"></div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        <Card3D
          v-for="(project, index) in projects"
          :key="project.id"
          :ref="el => { if (el) projectRefs[index] = el as HTMLElement }"
          class="project-card"
        >
          <Card class="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500 relative">
            <div class="card-shine absolute inset-0 pointer-events-none z-10"></div>
            <!-- Project Image -->
            <div class="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <component :is="project.icon" class="w-20 h-20 text-primary/40" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                <Button v-if="project.link" size="sm" variant="secondary" @click="openLink(project.link)">
                  <ExternalLink class="w-4 h-4 mr-2" />
                  {{ t('projects.viewProject') }}
                </Button>
                <Button v-if="project.images" size="sm" variant="secondary" @click="openProjectModal(project)">
                  <ImageIcon class="w-4 h-4 mr-2" />
                  {{ t('projects.viewGallery') }}
                </Button>
              </div>
            </div>

            <!-- Project Content -->
            <CardHeader>
              <CardTitle>{{ t(`projects.items.${project.key}.title`) }}</CardTitle>
              <CardDescription>{{ t(`projects.items.${project.key}.description`) }}</CardDescription>
            </CardHeader>

            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in project.technologies"
                  :key="tech"
                  variant="secondary"
                >
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Card3D>
      </div>
    </div>

    <Dialog v-model:open="isModalOpen">
      <DialogContent class="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{{ selectedProject ? t(`projects.items.${selectedProject.key}.title`) : '' }}</DialogTitle>
          <DialogDescription>{{ selectedProject ? t(`projects.items.${selectedProject.key}.description`) : '' }}</DialogDescription>
        </DialogHeader>
        <div class="mt-4">
          <ProjectCarousel 
            v-if="selectedProject?.images" 
            :images="selectedProject.images" 
            :project-name="t(`projects.items.${selectedProject.key}.title`)"
          />
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import {
  ShoppingCart,
  MessageSquare,
  Briefcase,
  Calendar,
  BookOpen,
  Zap,
  ExternalLink,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Package
} from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import Card3D from '~/components/Card3D.vue'
import Section3DObject from '~/components/Section3DObject.vue'
import ProjectCarousel from '~/components/ProjectCarousel.vue'

const { t } = useI18n()

const sectionTitle = ref<HTMLElement | null>(null)
const projectRefs = ref<HTMLElement[]>([])
const isModalOpen = ref(false)
const selectedProject = ref<any>(null)

const projects = [
  {
    id: 1,
    key: 'curva',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
    icon: ShoppingCart,
    link: 'https://curvaegypt.com',
    images: [
      '/images/curva/Screenshot from 2025-10-20 20-14-45.png',
      '/images/curva/Screenshot from 2025-10-20 20-14-56.png',
      '/images/curva/Screenshot from 2025-10-20 20-15-05.png',
      '/images/curva/Screenshot from 2025-10-20 20-15-15.png'
    ]
  },
  {
    id: 2,
    key: 'userManagement',
    technologies: ['Vue 3', 'Nuxt', 'Pinia', 'i18n'],
    icon: Briefcase,
    link: 'https://github.com/ibrahem-ghaybour/user-management-dashboard-vue-3-assessment'
  },
  {
    id: 3,
    key: 'dashboard',
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
    icon: LayoutDashboard,
    link: 'https://github.com/ibrahem-ghaybour/my-dashpoard-app',
    images: [
      '/videos/Screencast from 2025-10-18 22-09-24.webm'
    ]
  },
  {
    id: 4,
    key: 'whatsapp',
    technologies: ['Vue.js', 'Firebase', 'JavaScript', 'CSS'],
    icon: MessageCircle,
    link: 'https://ibrahem-ghaybour.github.io/whatsapp-ghaybour/'
  },
  {
    id: 5,
    key: 'deliver',
    technologies: ['TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GSAP'],
    icon: Package,
    link: 'https://ibrahem-ghaybour.github.io/deliver/'
  },
  {
    id: 6,
    key: 'genwin',
    technologies: ['Vue.js', 'Nuxt.js', 'JavaScript', 'Tailwind CSS'],
    icon: Zap
  },
  {
    id: 7,
    key: 'portfolio',
    technologies: ['Nuxt 3', 'Three.js', 'GSAP', 'Tailwind CSS'],
    icon: BookOpen
  },
  {
    id: 8,
    key: 'freelance',
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'REST APIs'],
    icon: MessageSquare
  },
  {
    id: 9,
    key: 'opensource',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Vitest'],
    icon: Calendar
  }
]

const openLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const openProjectModal = (project: any) => {
  selectedProject.value = project
  isModalOpen.value = true
}

onMounted(() => {
  // Simple animations without ScrollTrigger
  setTimeout(() => {
    // Animate project cards with simple fade and scale
    if (projectRefs.value.length > 0) {
      gsap.from(projectRefs.value, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }
  }, 200)
})
</script>

<style scoped>
.project-card {
  cursor: pointer;
}
</style>
