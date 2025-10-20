<template>
  <section id="contact" class="py-16 md:py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
    <Section3DObject 
      type="torus" 
      color="#6366f1" 
      :size="6"
      :position="{ x: 0, y: 0, z: -12 }"
    />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div ref="sectionTitle" class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {{ t('contact.title') }}
        </h2>
        <p class="text-base sm:text-lg text-muted-foreground">{{ t('contact.subtitle') }}</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mt-4"></div>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          <!-- Contact Info -->
          <div ref="contactInfo" class="space-y-8">
            <div>
              <h3 class="text-2xl font-semibold mb-6">{{ locale === 'ar' ? 'معلومات التواصل' : 'Contact Information' }}</h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p class="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:ebrahimghaibour65@gmail.com" class="text-foreground hover:text-primary transition-colors">
                      ebrahimghaibour65@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? 'هاتف' : 'Phone' }}</p>
                    <a href="tel:+201015290345" class="text-foreground hover:text-primary transition-colors">
                      +20 101 529 0345
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p class="text-sm text-muted-foreground">{{ locale === 'ar' ? 'الموقع' : 'Location' }}</p>
                    <p class="text-foreground">{{ locale === 'ar' ? 'مصر، العاشر من رمضان' : 'Egypt, 10th of Ramadan' }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-xl font-semibold mb-4">{{ locale === 'ar' ? 'تابعني' : 'Follow Me' }}</h3>
              <div class="flex gap-4">
                <a
                  href="https://github.com/ibrahem-ghaybour"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  <Github class="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ibrahim-ghaybour-2b999a299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  <Linkedin class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div ref="contactForm">
            <Card>
              <CardHeader>
                <CardTitle>{{ locale === 'ar' ? 'أرسل رسالة' : 'Send a Message' }}</CardTitle>
              </CardHeader>
              <CardContent>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                  <div>
                    <label class="text-sm font-medium mb-2 block">{{ t('contact.name') }}</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      :placeholder="t('contact.name')"
                    />
                  </div>

                  <div>
                    <label class="text-sm font-medium mb-2 block">{{ t('contact.email') }}</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      :placeholder="t('contact.email')"
                    />
                  </div>

                  <div>
                    <label class="text-sm font-medium mb-2 block">{{ t('contact.message') }}</label>
                    <textarea
                      v-model="form.message"
                      required
                      rows="5"
                      class="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      :placeholder="t('contact.message')"
                    ></textarea>
                  </div>

                  <Button type="submit" class="w-full" :disabled="isSubmitting">
                    <Send class="w-4 h-4 mr-2" />
                    {{ isSubmitting ? t('contact.sending') : t('contact.send') }}
                  </Button>

                  <p v-if="submitMessage" :class="submitSuccess ? 'text-green-600' : 'text-red-600'" class="text-sm text-center">
                    {{ submitMessage }}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from 'gsap'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send
} from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import Section3DObject from '~/components/Section3DObject.vue'

const { t, locale } = useI18n()

const sectionTitle = ref<HTMLElement | null>(null)
const contactInfo = ref<HTMLElement | null>(null)
const contactForm = ref<HTMLElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      `Message:\n${form.message}`
    )
    
    const mailtoLink = `mailto:ebrahimghaibour65@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    await new Promise(resolve => setTimeout(resolve, 500))
    
    isSubmitting.value = false
    submitSuccess.value = true
    submitMessage.value = t('contact.success')
    
    // Reset form after a delay
    setTimeout(() => {
      form.name = ''
      form.email = ''
      form.message = ''
      submitMessage.value = ''
    }, 3000)
  } catch (error) {
    isSubmitting.value = false
    submitSuccess.value = false
    submitMessage.value = t('contact.error')
    
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

onMounted(() => {
  // Simple animations without ScrollTrigger
  setTimeout(() => {
    if (contactInfo.value) {
      gsap.from(contactInfo.value, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }

    if (contactForm.value) {
      gsap.from(contactForm.value, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      })
    }
  }, 200)
})
</script>
