<template>
  <div v-if="!isMobile" class="cursor-wrapper">
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorOutline" class="cursor-outline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const cursorDot = ref<HTMLElement | null>(null)
const cursorOutline = ref<HTMLElement | null>(null)
const isMobile = ref(false)

let mouseX = 0
let mouseY = 0
let outlineX = 0
let outlineY = 0

onMounted(() => {
  // Check if device is mobile
  isMobile.value = window.matchMedia('(pointer: coarse)').matches
  
  if (isMobile.value) return

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Animate dot immediately
    gsap.to(cursorDot.value, {
      x: mouseX,
      y: mouseY,
      duration: 0.1,
      ease: 'power2.out'
    })
  }

  const handleMouseEnter = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
      gsap.to(cursorOutline.value, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(cursorDot.value, {
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  const handleMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
      gsap.to(cursorOutline.value, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(cursorDot.value, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Smooth follow animation for outline
  const animateOutline = () => {
    outlineX += (mouseX - outlineX) * 0.15
    outlineY += (mouseY - outlineY) * 0.15

    if (cursorOutline.value) {
      cursorOutline.value.style.transform = `translate(${outlineX}px, ${outlineY}px)`
    }

    requestAnimationFrame(animateOutline)
  }

  window.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseover', handleMouseEnter)
  document.addEventListener('mouseout', handleMouseLeave)
  
  animateOutline()

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseover', handleMouseEnter)
    document.removeEventListener('mouseout', handleMouseLeave)
  })
})
</script>

<style scoped>
.cursor-wrapper {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  mix-blend-mode: difference;
}

.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
}

.cursor-outline {
  position: fixed;
  width: 32px;
  height: 32px;
  border: 2px solid #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  transition: width 0.3s, height 0.3s;
}
</style>
