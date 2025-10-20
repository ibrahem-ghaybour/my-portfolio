<template>
  <footer class="py-8 border-t bg-background">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          © {{ new Date().getFullYear() }} Ibrahim Ghaybour. {{ t('footer.rights') }}.
        </p>
        <p class="text-sm text-muted-foreground flex items-center gap-2">
          {{ t('footer.built') }}
          <Heart class="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          {{ locale === 'ar' ? 'و' : 'and' }}
          <Code2 class="w-4 h-4 text-primary" />
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Heart, Code2 } from 'lucide-vue-next'

const { t, locale } = useI18n()
</script>
