<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <!-- Image -->
    <div
      class="relative group"
      :class="{ 'md:order-2': !imageLeft }"
    >
      <div class="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#5a7a9b]/30 transition-all duration-200">
        <img
          :src="image"
          :alt="title"
          class="w-full h-auto rounded-xl"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Content -->
    <div :class="{ 'md:order-1': !imageLeft }">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {{ title }}
      </h3>
      <p class="text-gray-300 leading-relaxed text-lg">
        {{ description }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
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
  imageLeft: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>
