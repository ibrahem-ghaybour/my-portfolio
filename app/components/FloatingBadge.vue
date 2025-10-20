<template>
  <div 
    ref="badgeRef" 
    class="floating-badge inline-block"
    :style="{ animationDelay: `${delay}s` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

interface Props {
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0
})

const badgeRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!badgeRef.value) return

  // Floating animation
  gsap.to(badgeRef.value, {
    y: -10,
    duration: 2 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: props.delay
  })

  // Rotation animation
  gsap.to(badgeRef.value, {
    rotateZ: 5,
    duration: 3 + Math.random() * 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: props.delay * 0.5
  })

  // Scale pulse
  gsap.to(badgeRef.value, {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    delay: props.delay * 0.3
  })
})
</script>

<style scoped>
.floating-badge {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>
