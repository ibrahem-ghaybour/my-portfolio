<template>
  <div class="w-full">
    <Carousel class="w-full">
      <CarouselContent>
        <CarouselItem v-for="(media, index) in images" :key="index">
          <div class="p-1">
            <Card>
              <CardContent class="flex aspect-video items-center justify-center p-0 overflow-hidden">
                <video 
                  v-if="isVideo(media)"
                  :src="media" 
                  controls
                  class="w-full h-full object-cover rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
                <img 
                  v-else
                  :src="media" 
                  :alt="`${projectName} screenshot ${index + 1}`"
                  class="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="left-2" />
      <CarouselNext class="right-2" />
    </Carousel>
    
    <!-- Thumbnail indicators -->
    <div class="flex justify-center gap-2 mt-4">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-primary w-8' : 'bg-muted-foreground/30'"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { Card, CardContent } from '~/components/ui/card'

interface Props {
  images: string[]
  projectName: string
}

const props = defineProps<Props>()
const currentIndex = ref(0)

const goToSlide = (index: number) => {
  currentIndex.value = index
  // You can add carousel API integration here if needed
}

const isVideo = (url: string) => {
  return url.endsWith('.webm') || url.endsWith('.mp4') || url.endsWith('.ogg')
}
</script>
