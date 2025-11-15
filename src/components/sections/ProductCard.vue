<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="group relative rounded-2xl overflow-hidden transition-all duration-200 flex flex-col border bg-white/5 border-white/10 hover:border-[rgba(90,122,155,0.5)] hover:shadow-[0_10px_25px_-5px_rgba(90,122,155,0.2)]"
  >
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3] bg-slate-800/50">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="p-8 flex-1 flex flex-col">
      <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">
        {{ title }}
      </h3>
      <p class="mb-6 leading-relaxed flex-1 text-slate-300">
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

