<template>
  <div>
    <LoadingScreen />
    <ScrollProgress /> 
    <!-- <SpotlightEffect /> -->
    <!-- <GlowingParticles /> -->
    <!-- <CustomCursor /> -->
    <!-- <CursorTrail /> -->
    <Floating3DObjects />
    <Navigation class="z-50" />
    <main class="min-h-screen w-full relative z-20">
      <NuxtPage />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Floating3DObjects from '~/components/Floating3DObjects.vue'
import LoadingScreen from '~/components/LoadingScreen.vue'
import ScrollProgress from '~/components/ScrollProgress.vue'
import SpotlightEffect from '~/components/SpotlightEffect.vue'
import GlowingParticles from '~/components/GlowingParticles.vue'

const { locale } = useI18n()

onMounted(() => {
  // Show default cursor for better usability
  // if (window.matchMedia('(pointer: fine)').matches) {
  //   document.body.style.cursor = 'none'
  // }
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Set initial direction
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale.value
})

// Watch for locale changes
watch(locale, (newLocale) => {
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = newLocale
})
</script>
