<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-[#06b6d4] hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)]"
  >
    <!-- Image -->
    <div
      class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#5a7a9b]/20 via-slate-800/50 to-[#2a4a6b]/30"
    >
      <img :src="image" :alt="title" class="h-full w-full object-contain p-8" loading="lazy" />
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-8">
      <h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">
        {{ title }}
      </h3>
      <p class="mb-6 flex-1 leading-relaxed text-slate-300">
        {{ description }}
      </p>

      <!-- Actions -->
      <div class="flex flex-col gap-3 sm:flex-row">
        <AppButton v-if="readMoreLink" :to="readMoreLink" variant="outline" class="flex-1">
          Read more
          <font-awesome-icon icon="chevron-right" class="h-4 w-4" />
        </AppButton>
        <AppButton v-if="launchLink" :href="launchLink" external variant="primary" class="flex-1">
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
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  readMoreLink: {
    type: String,
    default: '',
  },
  launchLink: {
    type: String,
    default: '',
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>
