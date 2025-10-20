<template>
  <div class="pointer-events-none fixed inset-0 z-30 transition duration-300">
    <!-- Main Spotlight following cursor -->
    <div
      ref="spotlightRef"
      class="spotlight-gradient absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
      :style="{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        opacity: isVisible ? 0.4 : 0
      }"
    ></div>

    <!-- Secondary glow effect -->
    <div
      class="spotlight-glow absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
      :style="{
        left: `${mouseX}px`,
        top: `${mouseY}px`,
        opacity: isVisible ? 0.3 : 0
      }"
    ></div>

    <!-- Scroll-based light beam -->
    <div
      class="light-beam absolute left-0 right-0 transition-all duration-1000"
      :style="{
        top: `${scrollProgress * 100}%`,
        opacity: 0.15
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)
const scrollProgress = ref(0)
const isVisible = ref(false)
const spotlightRef = ref<HTMLElement | null>(null)

let rafId: number

onMounted(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (rafId) cancelAnimationFrame(rafId)
    
    rafId = requestAnimationFrame(() => {
      mouseX.value = e.clientX
      mouseY.value = e.clientY
      isVisible.value = true
    })
  }

  const handleMouseLeave = () => {
    isVisible.value = false
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = scrollTop / docHeight
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)
  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    if (rafId) cancelAnimationFrame(rafId)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.spotlight-gradient {
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.4) 0%,
    rgba(139, 92, 246, 0.3) 25%,
    rgba(59, 130, 246, 0.2) 50%,
    transparent 70%
  );
  filter: blur(40px);
  will-change: transform, opacity;
}

.spotlight-glow {
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(168, 85, 247, 0.5) 0%,
    rgba(236, 72, 153, 0.3) 40%,
    transparent 70%
  );
  filter: blur(60px);
  will-change: transform, opacity;
}

.light-beam {
  height: 200px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(99, 102, 241, 0.2) 30%,
    rgba(139, 92, 246, 0.3) 50%,
    rgba(59, 130, 246, 0.2) 70%,
    transparent 100%
  );
  filter: blur(30px);
  transform: translateY(-50%);
}
</style>
