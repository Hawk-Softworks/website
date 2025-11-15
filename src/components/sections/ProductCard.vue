<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
  >
    <!-- Image -->
    <div class="relative overflow-hidden bg-gradient-card aspect-[4/3]">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-fade opacity-40"></div>
    </div>

    <!-- Content -->
    <div class="p-8 flex-1 flex flex-col">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {{ title }}
      </h3>
      <p class="text-gray-300 mb-6 leading-relaxed flex-1">
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
          <font-awesome-icon icon="chevron-right" class="w-4 h-4" />
        </AppButton>
        <AppButton
          v-if="launchLink"
          :href="launchLink"
          external
          variant="primary"
          class="flex-1"
        >
          Open WebApp
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
