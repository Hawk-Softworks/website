<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
    class="grid items-center gap-8 py-8 md:grid-cols-2 md:gap-12"
    :class="{ 'md:flex-row-reverse': !imageLeft }"
  >
    <!-- Image -->
    <div class="group relative" :class="{ 'md:order-2': !imageLeft }">
      <div
        class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-200 hover:border-[rgba(90,122,155,0.3)]"
      >
        <img :src="image" :alt="title" class="h-auto w-full rounded-xl" loading="lazy" />
      </div>
    </div>

    <!-- Content -->
    <div :class="{ 'md:order-1': !imageLeft }">
      <h3 class="mb-4 text-2xl font-bold text-white md:text-3xl">
        {{ title }}
      </h3>
      <p class="text-lg leading-relaxed text-slate-300">
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
  imageLeft: {
    type: Boolean,
    default: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>
