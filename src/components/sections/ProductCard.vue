<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-200 hover:shadow-lg"
  >
    <!-- Image -->
    <div class="relative overflow-hidden aspect-video">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="p-8">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {{ title }}
      </h3>
      <p class="text-gray-300 mb-6 leading-relaxed">
        {{ description }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-3">
        <AppButton
          v-if="readMoreLink"
          :to="readMoreLink"
          variant="outline"
          class="flex-1"
        >
          Read more
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </AppButton>
        <AppButton
          v-if="launchLink"
          :href="launchLink"
          external
          variant="primary"
          class="flex-1"
        >
          Launch App
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '../ui/AppButton.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  readMoreLink: {
    type: String,
    default: ''
  },
  launchLink: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>
