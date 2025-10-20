<template>
  <div class="pointer-events-none fixed inset-0 z-[5]">
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-0 animate-particle"
      :style="{
        left: `${particle.x}px`,
        top: `${particle.y}px`,
        animationDelay: `${particle.delay}ms`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  delay: number
}

const particles = ref<Particle[]>([])
const maxParticles = 15
let particleIndex = 0

const addParticle = (x: number, y: number) => {
  // Only add particles on desktop with fine pointer (mouse)
  if (!window.matchMedia('(pointer: fine)').matches) return
  
  const particle: Particle = {
    x,
    y,
    delay: 0
  }
  
  if (particles.value.length >= maxParticles) {
    particles.value.shift()
  }
  
  particles.value.push(particle)
  
  // Remove particle after animation
  setTimeout(() => {
    particles.value.shift()
  }, 800)
}

let lastX = 0
let lastY = 0
let throttleTimer: number | null = null

const handleMouseMove = (e: MouseEvent) => {
  const distance = Math.sqrt(
    Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
  )
  
  // Only add particle if mouse moved significantly
  if (distance > 20) {
    if (!throttleTimer) {
      addParticle(e.clientX, e.clientY)
      lastX = e.clientX
      lastY = e.clientY
      
      throttleTimer = window.setTimeout(() => {
        throttleTimer = null
      }, 50)
    }
  }
}

onMounted(() => {
  // Only enable on desktop
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (throttleTimer) {
    clearTimeout(throttleTimer)
  }
})
</script>

<style scoped>
@keyframes particle {
  0% {
    opacity: 0.6;
    transform: scale(1) translate(0, 0);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.5) translate(var(--tx, 0), var(--ty, 0));
  }
  100% {
    opacity: 0;
    transform: scale(0) translate(var(--tx, 0), var(--ty, 0));
  }
}

.animate-particle {
  animation: particle 0.8s ease-out forwards;
  --tx: 0px;
  --ty: 0px;
}
</style>
