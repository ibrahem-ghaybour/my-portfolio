<template>
  <div
    ref="cardRef"
    class="card-3d"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { gsap } from 'gsap'

const cardRef = ref<HTMLElement | null>(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return

  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -15
  const rotateY = ((x - centerX) / centerX) * 15

  gsap.to(card, {
    rotationX: rotateX,
    rotationY: rotateY,
    transformPerspective: 1000,
    duration: 0.3,
    ease: 'power2.out',
  })

  // Create shine effect
  const shine = card.querySelector('.card-shine') as HTMLElement
  if (shine) {
    const percentX = (x / rect.width) * 100
    const percentY = (y / rect.height) * 100
    shine.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
  }
}

const handleMouseLeave = () => {
  if (!cardRef.value) return

  gsap.to(cardRef.value, {
    rotationX: 0,
    rotationY: 0,
    duration: 0.5,
    ease: 'power2.out',
  })
}

const handleMouseEnter = () => {
  if (!cardRef.value) return

  gsap.to(cardRef.value, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  })
}
</script>

<style scoped>
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.1s ease;
  position: relative;
}

.card-3d::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s;
}

.card-3d:hover::before {
  opacity: 1;
}
</style>
