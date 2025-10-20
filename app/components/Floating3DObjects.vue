<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none z-10"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let objects: THREE.Mesh[] = []
let animationId: number
let scrollY = 0
let targetScrollY = 0
let currentScrollY = 0

onMounted(() => {
  if (!containerRef.value) return

  // Setup Scene
  scene = new THREE.Scene()
  
  // Setup Camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 30

  // Setup Renderer
  renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Create multiple 3D objects
  createFloatingObjects()

  // Handle Scroll with smooth interpolation
  const handleScroll = () => {
    targetScrollY = window.scrollY
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Smooth scroll interpolation
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  // Handle Resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  // Animation Loop with smooth interpolation
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    // Smooth scroll interpolation (lerp factor 0.1 = smooth, 0.05 = very smooth)
    currentScrollY = lerp(currentScrollY, targetScrollY, 0.08)
    
    const scrollProgress = currentScrollY / (document.body.scrollHeight - window.innerHeight)
    const time = Date.now() * 0.001

    // Minimal animation for single object
    if (objects[0]) {
      const obj = objects[0]
      
      // Simple rotation only
      obj.rotation.x += 0.003
      obj.rotation.y += 0.005
      
      // Gentle float down with scroll
      obj.position.y = 5 - scrollProgress * 20
    }

    // Smooth camera movement based on scroll
    const targetCameraY = -scrollProgress * 20
    const targetCameraRotation = scrollProgress * 0.5
    
    camera.position.y = lerp(camera.position.y, targetCameraY, 0.08)
    camera.rotation.x = lerp(camera.rotation.x, targetCameraRotation, 0.08)

    renderer.render(scene, camera)
  }
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    
    // Cleanup
    objects.forEach(obj => {
      obj.geometry.dispose()
      if (Array.isArray(obj.material)) {
        obj.material.forEach(mat => mat.dispose())
      } else {
        obj.material.dispose()
      }
    })
    renderer.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  })
})

function createFloatingObjects() {
  // Ultra-lightweight: single low-poly object
  const geometry = new THREE.OctahedronGeometry(3.5, 0) // 0 subdivisions = very light
  
  const material = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })

  const mesh = new THREE.Mesh(geometry, material)
  
  // Position on right side, out of the way
  mesh.position.x = 20
  mesh.position.y = 5
  mesh.position.z = -20

  scene.add(mesh)
  objects.push(mesh)
}
</script>

<style scoped>
canvas {
  display: block;
}
</style>
