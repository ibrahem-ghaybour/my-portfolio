<template>
  <nav 
    ref="navRef" 
    class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b transition-all duration-300"
    :class="{ 'shadow-lg py-2': isScrolled, 'py-0': !isScrolled }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {{ locale === 'ar' ? 'محفظتي' : 'Portfolio' }}
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="`#${item.key}`"
            class="nav-link text-foreground/80 hover:text-foreground transition-colors duration-300"
            @click.prevent="scrollToSection(item.key)"
          >
            {{ t(`nav.${item.key}`) }}
          </a>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Theme Switcher -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon">
                <Sun v-if="colorMode === 'light'" class="h-5 w-5" />
                <Moon v-else-if="colorMode === 'dark'" class="h-5 w-5" />
                <Monitor v-else class="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="setColorMode('light')">
                <Sun class="h-4 w-4 mr-2" />
                {{ t('theme.light') }}
              </DropdownMenuItem>
              <DropdownMenuItem @click="setColorMode('dark')">
                <Moon class="h-4 w-4 mr-2" />
                {{ t('theme.dark') }}
              </DropdownMenuItem>
              <DropdownMenuItem @click="setColorMode('auto')">
                <Monitor class="h-4 w-4 mr-2" />
                {{ t('theme.system') }}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Language Switcher -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="icon">
                <Languages class="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="setLocale('en')">
                English
              </DropdownMenuItem>
              <DropdownMenuItem @click="setLocale('ar')">
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Mobile Menu Toggle -->
          <Button
            variant="outline"
            size="icon"
            class="md:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </Button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 flex flex-col gap-4"
      >
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="`#${item.key}`"
          class="text-foreground/80 hover:text-foreground transition-colors duration-300"
          @click.prevent="scrollToSection(item.key); mobileMenuOpen = false"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColorMode } from '@vueuse/core'
import { gsap } from 'gsap'
import { Sun, Moon, Monitor, Languages, Menu, X } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

const { t, locale } = useI18n()
const colorMode = useColorMode()
const navRef = ref<HTMLElement | null>(null)
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navItems = [
  { key: 'home' },
  { key: 'about' },
  { key: 'skills' },
  { key: 'projects' },
  { key: 'contact' },
]

const setColorMode = (mode: 'light' | 'dark' | 'auto') => {
  colorMode.value = mode
}

const setLocale = (newLocale: string) => {
  locale.value = newLocale
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
}

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
  // Set initial direction
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'

  // Animate navigation on mount
  gsap.from(navRef.value, {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  // Add scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, hsl(var(--primary)), hsl(262, 83%, 58%));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
