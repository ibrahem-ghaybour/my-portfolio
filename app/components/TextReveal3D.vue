<template>
  <div ref="containerRef" class="text-reveal-3d">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    if (!containerRef.value) return

    const text = containerRef.value.textContent || ''
    const chars = text.split('')
    
    // Clear and rebuild with spans
    containerRef.value.innerHTML = ''
    
    chars.forEach((char, index) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(50px) rotateX(-90deg)'
      containerRef.value?.appendChild(span)
    })

    // Animate characters
    if (containerRef.value && containerRef.value.children.length > 0) {
      gsap.to(containerRef.value.children, {
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.7)',
      })
    }
  }, 100)
})
</script>

<style scoped>
.text-reveal-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}
</style>
