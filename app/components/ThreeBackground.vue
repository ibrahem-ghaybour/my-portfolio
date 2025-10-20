<template>
  <div ref="containerRef" class="absolute inset-0 -z-10"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particles: THREE.Points
let animationId: number

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
  camera.position.z = 50

  // Setup Renderer
  renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Create Particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1500
  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 100
    posArray[i + 1] = (Math.random() - 0.5) * 100
    posArray[i + 2] = (Math.random() - 0.5) * 100

    // Color gradient from blue to purple
    const t = Math.random()
    colorsArray[i] = 0.3 + t * 0.4     // R
    colorsArray[i + 1] = 0.4 + t * 0.3 // G
    colorsArray[i + 2] = 0.8 + t * 0.2 // B
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3)
  )
  particlesGeometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colorsArray, 3)
  )

  // Particle Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })

  particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  // Create Geometric Shapes
  createFloatingShapes()

  // Handle Resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  // Mouse Movement
  let mouseX = 0
  let mouseY = 0
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1
  }
  window.addEventListener('mousemove', handleMouseMove)

  // Animation Loop
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    // Rotate particles
    particles.rotation.y += 0.001
    particles.rotation.x += 0.0005

    // Camera movement based on mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
    camera.position.y += (mouseY * 5 - camera.position.y) * 0.05
    camera.lookAt(scene.position)

    // Animate floating shapes
    scene.children.forEach((child, index) => {
      if (child instanceof THREE.Mesh) {
        child.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1)
        child.rotation.y += 0.01 * (index % 2 === 0 ? -1 : 1)
        child.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01
      }
    })

    renderer.render(scene, camera)
  }
  animate()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    renderer.dispose()
    particlesGeometry.dispose()
    particlesMaterial.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  })
})

function createFloatingShapes() {
  // Torus
  const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
  const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })
  const torus = new THREE.Mesh(torusGeometry, torusMaterial)
  torus.position.set(-20, 10, -20)
  scene.add(torus)

  // Icosahedron
  const icoGeometry = new THREE.IcosahedronGeometry(8, 0)
  const icoMaterial = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })
  const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial)
  icosahedron.position.set(25, -15, -30)
  scene.add(icosahedron)

  // Octahedron
  const octaGeometry = new THREE.OctahedronGeometry(7, 0)
  const octaMaterial = new THREE.MeshBasicMaterial({
    color: 0x3b82f6,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })
  const octahedron = new THREE.Mesh(octaGeometry, octaMaterial)
  octahedron.position.set(15, 20, -25)
  scene.add(octahedron)

  // Torus Knot
  const knotGeometry = new THREE.TorusKnotGeometry(6, 2, 100, 16)
  const knotMaterial = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  })
  const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial)
  torusKnot.position.set(-15, -10, -35)
  scene.add(torusKnot)
}
</script>

<style scoped>
canvas {
  display: block;
}
</style>
