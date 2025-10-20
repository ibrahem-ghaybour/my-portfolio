<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
    <div class="container flex h-16 items-center justify-between px-4">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600">
          <span class="text-white font-bold text-lg">{{ locale === 'ar' ? 'م' : 'P' }}</span>
        </div>
        <span class="text-xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {{ locale === 'ar' ? 'محفظتي' : 'Portfolio' }}
        </span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1">
        <a 
          v-for="item in navItems" 
          :key="item"
          :href="`#${item}`" 
          class="px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent rounded-md relative group"
        >
          {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <!-- Theme Toggle -->
        <Button 
          variant="outline" 
          size="icon" 
          @click="toggleTheme"
          class="relative overflow-hidden transition-all hover:scale-105"
        >
          <Sun v-if="isDark" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <Moon v-else class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Button>

        <!-- Language Toggle -->
        <Button 
          variant="outline" 
          size="sm" 
          @click="toggleLanguage"
          class="gap-2 transition-all hover:scale-105"
        >
          <Languages class="h-4 w-4" />
          <span class="text-xs font-semibold">{{ currentLang }}</span>
        </Button>

        <!-- Mobile Menu Toggle -->
        <Button 
          variant="outline" 
          size="icon" 
          class="md:hidden transition-all hover:scale-105" 
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
          <X v-else class="h-5 w-5" />
        </Button>
      </div>
    </div>
    
    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
        <div class="container py-4 flex flex-col gap-2 px-4">
          <a 
            v-for="item in navItems" 
            :key="item"
            :href="`#${item}`"
            @click="mobileMenuOpen = false"
            class="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-all"
          >
            {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { Sun, Moon, Languages, Menu, X } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'

const colorMode = useColorMode()
const { locale } = useI18n()
const mobileMenuOpen = ref(false)

const navItems = ['home', 'about', 'skills', 'projects', 'contact']

const isDark = computed(() => colorMode.value === 'dark')
const currentLang = computed(() => locale.value === 'ar' ? 'EN' : 'AR')

const toggleTheme = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  locale.value = newLocale
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
}
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
