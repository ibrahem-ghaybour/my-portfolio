<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      <!-- Animated Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 animate-gradient"></div>
      
      <!-- Content Container -->
      <div class="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <!-- Name Animation -->
        <div class="mb-6 sm:mb-8">
          <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight break-words">
            <span 
              v-for="(letter, index) in nameLetters" 
              :key="index"
              class="inline-block animate-letter bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ letter === ' ' ? '\u00A0' : letter }}
            </span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-in-up px-4" style="animation-delay: 1.5s">
            {{ locale === 'ar' ? 'مطور واجهات أمامية' : 'Frontend Developer' }}
          </p>
        </div>

        <!-- Elegant Loading Bar -->
        <div class="max-w-xs sm:max-w-md mx-auto px-4">
          <!-- Progress Bar Container -->
          <div class="relative h-1 bg-muted rounded-full overflow-hidden mb-4">
            <div 
              class="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full transition-all duration-300 ease-out"
              :style="{ width: `${progress}%` }"
            >
              <!-- Shimmer Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          <!-- Loading Text -->
          <p class="text-sm text-muted-foreground animate-pulse">
            {{ locale === 'ar' ? 'جاري التحميل...' : 'Loading...' }} {{ Math.round(progress) }}%
          </p>
        </div>

        <!-- Floating Dots Animation -->
        <div class="flex justify-center gap-2 mt-8">
          <div 
            v-for="i in 3" 
            :key="i"
            class="w-2 h-2 bg-primary rounded-full animate-bounce"
            :style="{ animationDelay: `${i * 0.15}s` }"
          ></div>
        </div>
      </div>

      <!-- Decorative Elements (Hidden on small screens) -->
      <div class="hidden md:block absolute top-10 left-10 w-16 h-16 lg:w-20 lg:h-20 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      <div class="hidden md:block absolute bottom-10 right-10 w-24 h-24 lg:w-32 lg:h-32 border-2 border-purple-500/20 rounded-full animate-spin-slow" style="animation-direction: reverse;"></div>
      <div class="hidden lg:block absolute top-1/2 right-20 w-16 h-16 border-2 border-blue-500/20 rounded-full animate-pulse"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const isLoading = ref(true)
const progress = ref(0)
const nameLetters = 'Ibrahim Ghaybour'.split('')

onMounted(() => {
  // Prevent body scroll during loading
  document.body.style.overflow = 'hidden'
  
  // Simulate loading progress
  const interval = setInterval(() => {
    progress.value += Math.random() * 15
    
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      
      // Hide loading screen after a short delay
      setTimeout(() => {
        isLoading.value = false
        // Re-enable body scroll
        document.body.style.overflow = ''
      }, 500)
    }
  }, 200)

  // Fallback: ensure loading screen disappears after 3 seconds
  setTimeout(() => {
    if (isLoading.value) {
      progress.value = 100
      setTimeout(() => {
        isLoading.value = false
        // Re-enable body scroll
        document.body.style.overflow = ''
      }, 500)
    }
  }, 3000)
})
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Letter animation */
@keyframes letterFloat {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0;
  }
  50% {
    transform: translateY(-10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.animate-letter {
  animation: letterFloat 1s ease-out forwards;
  opacity: 0;
}

/* Fade in up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Shimmer effect */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Slow spin */
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 8s linear infinite;
}

/* Gradient animation */
@keyframes gradient {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-gradient {
  animation: gradient 3s ease-in-out infinite;
}
</style>
