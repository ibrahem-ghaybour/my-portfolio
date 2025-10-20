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

    // Animate each object based on smooth scroll
    objects.forEach((obj, index) => {
      // Smooth rotation based on scroll and time
      obj.rotation.x += 0.005 + scrollProgress * 0.002
      obj.rotation.y += 0.008 + scrollProgress * 0.003
      obj.rotation.z += 0.003

      // Smooth position changes based on scroll
      const scrollOffset = scrollProgress * 100
      const targetY = Math.sin(scrollProgress * Math.PI * 4 + index) * 10 - scrollOffset * 0.3
      const targetX = Math.cos(scrollProgress * Math.PI * 3 + index * 2) * 15
      const targetZ = Math.sin(scrollProgress * Math.PI * 2 + index) * 5 - 10
      
      // Smooth position interpolation
      obj.position.y = lerp(obj.position.y, targetY, 0.05)
      obj.position.x = lerp(obj.position.x, targetX, 0.05)
      obj.position.z = lerp(obj.position.z, targetZ, 0.05)

      // Smooth scale pulse
      const targetScale = 1 + Math.sin(time + index) * 0.15
      const currentScale = obj.scale.x
      const newScale = lerp(currentScale, targetScale, 0.1)
      obj.scale.set(newScale, newScale, newScale)
    })

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
  const geometries = [
    new THREE.TorusGeometry(3, 1, 16, 100),
    new THREE.IcosahedronGeometry(3, 0),
    new THREE.OctahedronGeometry(3, 0),
    new THREE.TetrahedronGeometry(3, 0),
    new THREE.TorusKnotGeometry(2, 0.8, 100, 16),
    new THREE.DodecahedronGeometry(3, 0),
  ]

  const colors = [
    0x6366f1, // Indigo
    0x8b5cf6, // Purple
    0x3b82f6, // Blue
    0xa855f7, // Violet
    0x06b6d4, // Cyan
    0xec4899, // Pink
  ]

  geometries.forEach((geometry, index) => {
    const material = new THREE.MeshBasicMaterial({
      color: colors[index],
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })

    const mesh = new THREE.Mesh(geometry, material)
    
    // Initial positions spread across the scene
    mesh.position.x = (index % 3 - 1) * 20
    mesh.position.y = Math.floor(index / 3) * 15 - 10
    mesh.position.z = -10 - index * 2

    scene.add(mesh)
    objects.push(mesh)
  })
}
</script>

<style scoped>
canvas {
  display: block;
}
</style>
