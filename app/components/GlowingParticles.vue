<template>
  <div class="fixed inset-0 pointer-events-none z-20 overflow-hidden">
    <canvas ref="canvasRef" class="w-full h-full"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationId: number
let particles: Particle[] = []

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  
  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.opacity = Math.random() * 0.5 + 0.3
    
    const colors = [
      'rgba(99, 102, 241,',    // Indigo
      'rgba(139, 92, 246,',    // Purple
      'rgba(59, 130, 246,',    // Blue
      'rgba(168, 85, 247,',    // Violet
    ]
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }
  
  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY
    
    // Wrap around screen
    if (this.x > canvas.width) this.x = 0
    if (this.x < 0) this.x = canvas.width
    if (this.y > canvas.height) this.y = 0
    if (this.y < 0) this.y = canvas.height
    
    // Pulse opacity
    this.opacity = Math.sin(Date.now() * 0.001 + this.x) * 0.3 + 0.5
  }
  
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `${this.color} ${this.opacity})`
    ctx.fill()
    
    // Glow effect
    ctx.shadowBlur = 15
    ctx.shadowColor = `${this.color} ${this.opacity})`
  }
}

onMounted(() => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d')
  if (!ctx) return
  
  // Set canvas size
  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  
  // Create particles
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas))
  }
  
  // Animation loop
  const animate = () => {
    if (!ctx || !canvas) return
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      particle.update(canvas)
      particle.draw(ctx!)
    })
    
    // Draw connections between nearby particles
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          ctx!.beginPath()
          ctx!.moveTo(p1.x, p1.y)
          ctx!.lineTo(p2.x, p2.y)
          ctx!.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`
          ctx!.lineWidth = 0.5
          ctx!.stroke()
        }
      })
    })
    
    animationId = requestAnimationFrame(animate)
  }
  animate()
  
  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resizeCanvas)
  })
})
</script>
