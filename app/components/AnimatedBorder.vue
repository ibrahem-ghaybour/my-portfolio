<template>
  <div class="animated-border-wrapper">
    <slot />
    <div class="animated-border"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.animated-border-wrapper {
  position: relative;
  overflow: hidden;
}

.animated-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(99, 102, 241, 0.8),
    rgba(139, 92, 246, 0.8),
    rgba(59, 130, 246, 0.8),
    transparent
  );
  background-size: 200% 100%;
  animation: borderAnimation 3s linear infinite;
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

@keyframes borderAnimation {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
