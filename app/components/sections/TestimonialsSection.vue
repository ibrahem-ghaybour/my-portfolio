<template>
  <section id="testimonials" class="py-16 md:py-20 lg:py-32 relative overflow-hidden bg-muted/30">
    <Section3DObject 
      type="octahedron" 
      color="#10b981" 
      :size="4"
      :position="{ x: 15, y: -10, z: -12 }"
    />
    <Section3DObject 
      type="torus" 
      color="#3b82f6" 
      :size="3"
      :position="{ x: -20, y: 5, z: -8 }"
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {{ t('testimonials.title') }}
        </h2>
        <p class="text-base sm:text-lg text-muted-foreground">{{ t('testimonials.subtitle') }}</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-green-600 mx-auto mt-4"></div>
      </div>

      <div class="max-w-6xl mx-auto">
        <Carousel
          class="w-full"
          :opts="{
            align: 'start',
            loop: true,
          }"
        >
          <CarouselContent class="-ml-4">
            <CarouselItem 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card class="h-full hover:shadow-2xl transition-all duration-500 group">
                <CardContent class="pt-6">
                  <div class="flex flex-col items-center text-center space-y-4">
                    <!-- Avatar -->
                    <div class="relative">
                      <div class="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                        <img 
                          :src="testimonial.avatar" 
                          :alt="testimonial.name"
                          class="w-full h-full object-cover"
                        />
                      </div>
                      <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>

                    <!-- Comment -->
                    <p class="text-muted-foreground italic leading-relaxed min-h-[100px] flex items-center">
                      "{{ testimonial.comment }}"
                    </p>

                    <!-- Name & Role -->
                    <div>
                      <h4 class="font-bold text-lg">{{ testimonial.name }}</h4>
                      <p class="text-sm text-muted-foreground">{{ testimonial.role }}</p>
                      <p class="text-xs text-muted-foreground mt-1">{{ testimonial.company }}</p>
                    </div>

                    <!-- Rating -->
                    <div class="flex gap-1">
                      <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="-left-12" />
          <CarouselNext class="-right-12" />
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Card, CardContent } from '~/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import Section3DObject from '~/components/Section3DObject.vue'

const { t } = useI18n()

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    comment: 'Outstanding work! The attention to detail and modern design exceeded our expectations. Highly professional and responsive.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Ahmed Hassan',
    role: 'Product Manager',
    company: 'Digital Solutions',
    comment: 'Exceptional developer with great communication skills. Delivered a pixel-perfect, responsive website on time.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Director',
    company: 'Creative Agency',
    comment: 'The portfolio speaks for itself! Beautiful animations and smooth user experience. A pleasure to work with.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'CTO',
    company: 'StartupHub',
    comment: 'Impressive technical skills and modern tech stack. The performance optimization was outstanding.',
    avatar: 'https://i.pravatar.cc/150?img=13'
  },
  {
    id: 5,
    name: 'Layla Al-Rashid',
    role: 'UX Designer',
    company: 'Design Studio',
    comment: 'Perfect implementation of our designs with excellent attention to accessibility and user experience.',
    avatar: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 6,
    name: 'David Martinez',
    role: 'Founder',
    company: 'E-commerce Pro',
    comment: 'Built our entire e-commerce platform with amazing features. Professional, reliable, and skilled developer.',
    avatar: 'https://i.pravatar.cc/150?img=14'
  },
  {
    id: 7,
    name: 'Fatima Zahra',
    role: 'Project Manager',
    company: 'Web Solutions',
    comment: 'Excellent collaboration and problem-solving skills. Delivered beyond what we asked for.',
    avatar: 'https://i.pravatar.cc/150?img=10'
  },
  {
    id: 8,
    name: 'James Wilson',
    role: 'Tech Lead',
    company: 'Innovation Labs',
    comment: 'Clean code, modern architecture, and great documentation. A true professional in every aspect.',
    avatar: 'https://i.pravatar.cc/150?img=15'
  },
  {
    id: 9,
    name: 'Nour Khalil',
    role: 'Business Owner',
    company: 'Retail Plus',
    comment: 'Transformed our online presence completely. The website is fast, beautiful, and converts visitors to customers.',
    avatar: 'https://i.pravatar.cc/150?img=20'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    role: 'VP of Engineering',
    company: 'Tech Giants',
    comment: 'One of the best front-end developers I\'ve worked with. Strong Vue.js expertise and excellent work ethic.',
    avatar: 'https://i.pravatar.cc/150?img=17'
  }
]
</script>

