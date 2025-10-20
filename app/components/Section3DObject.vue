<template>
  <div ref="containerRef" class="absolute inset-0 pointer-events-none overflow-hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

interface Props {
  type?: 'torus' | 'icosahedron' | 'octahedron' | 'torusKnot' | 'dodecahedron' | 'sphere'
  color?: string
  size?: number
  position?: { x: number; y: number; z: number }
}

const props = withDefaults(defineProps<Props>(), {
  type: 'torus',
  color: '#6366f1',
  size: 4,
  position: () => ({ x: 0, y: 0, z: -5 })
})

const containerRef = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let mesh: THREE.Mesh
let animationId: number
let observer: IntersectionObserver

onMounted(() => {
  if (!containerRef.value) return

  // Setup Scene
  scene = new THREE.Scene()
  
  // Setup Camera
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.offsetWidth / containerRef.value.offsetHeight,
    0.1,
    1000
  )
  camera.position.z = 15

  // Setup Renderer
  renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  })
  renderer.setSize(containerRef.value.offsetWidth, containerRef.value.offsetHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Create 3D object based on type
  createObject()

  // Intersection Observer for scroll-based animation
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation()
        }
      })
    },
    { threshold: 0.3 }
  )

  if (containerRef.value.parentElement) {
    observer.observe(containerRef.value.parentElement)
  }

  // Handle Resize
  const handleResize = () => {
    if (!containerRef.value) return
    camera.aspect = containerRef.value.offsetWidth / containerRef.value.offsetHeight
    camera.updateProjectionMatrix()
    renderer.setSize(containerRef.value.offsetWidth, containerRef.value.offsetHeight)
  }
  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', handleResize)
    observer?.disconnect()
    
    // Cleanup
    if (mesh) {
      mesh.geometry.dispose()
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(mat => mat.dispose())
      } else {
        mesh.material.dispose()
      }
    }
    renderer.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  })
})

function createObject() {
  let geometry: THREE.BufferGeometry

  switch (props.type) {
    case 'icosahedron':
      geometry = new THREE.IcosahedronGeometry(props.size, 0)
      break
    case 'octahedron':
      geometry = new THREE.OctahedronGeometry(props.size, 0)
      break
    case 'torusKnot':
      geometry = new THREE.TorusKnotGeometry(props.size * 0.6, props.size * 0.25, 100, 16)
      break
    case 'dodecahedron':
      geometry = new THREE.DodecahedronGeometry(props.size, 0)
      break
    case 'sphere':
      geometry = new THREE.SphereGeometry(props.size, 32, 32)
      break
    case 'torus':
    default:
      geometry = new THREE.TorusGeometry(props.size, props.size * 0.3, 16, 100)
  }

  const material = new THREE.MeshBasicMaterial({
    color: props.color,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })

  mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(props.position.x, props.position.y, props.position.z)
  scene.add(mesh)
}

function startAnimation() {
  let targetRotationX = 0
  let targetRotationY = 0
  let targetRotationZ = 0
  
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor
  }

  const animate = () => {
    animationId = requestAnimationFrame(animate)

    if (mesh) {
      const time = Date.now() * 0.001

      // Smooth continuous rotation
      targetRotationX += 0.008
      targetRotationY += 0.012
      targetRotationZ += 0.004
      
      mesh.rotation.x = lerp(mesh.rotation.x, targetRotationX, 0.1)
      mesh.rotation.y = lerp(mesh.rotation.y, targetRotationY, 0.1)
      mesh.rotation.z = lerp(mesh.rotation.z, targetRotationZ, 0.1)

      // Smooth floating motion
      const targetY = props.position.y + Math.sin(time) * 2
      const targetX = props.position.x + Math.cos(time * 0.8) * 1.5
      
      mesh.position.y = lerp(mesh.position.y, targetY, 0.05)
      mesh.position.x = lerp(mesh.position.x, targetX, 0.05)

      // Smooth scale pulse
      const targetScale = 1 + Math.sin(time * 2) * 0.08
      const currentScale = mesh.scale.x
      const newScale = lerp(currentScale, targetScale, 0.1)
      mesh.scale.set(newScale, newScale, newScale)
    }

    renderer.render(scene, camera)
  }
  animate()
}
</script>

<style scoped>
canvas {
  display: block;
}
</style>
