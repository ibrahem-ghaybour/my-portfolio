<template>
  <div class="fixed top-0 left-0 right-0 z-[100] h-1 bg-muted/30">
    <div 
      class="h-full bg-gradient-to-r from-primary via-purple-600 to-blue-600 transition-all duration-150 ease-out"
      :style="{ width: `${scrollProgress}%` }"
    >
      <!-- Glow effect -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 blur-sm opacity-50"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const scrollTop = window.scrollY
  const scrollableHeight = documentHeight - windowHeight
  
  if (scrollableHeight > 0) {
    scrollProgress.value = (scrollTop / scrollableHeight) * 100
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>
