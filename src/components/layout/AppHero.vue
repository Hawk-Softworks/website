<template>
  <section
    class="relative bg-cover bg-center py-16 md:py-24 overflow-hidden"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/70 to-[#060914]"></div>

    <!-- Content -->
    <div class="relative max-w-6xl mx-auto px-8 lg:px-16">
      <div class="mx-auto text-center">
        <slot name="content">
          <h1
            v-if="title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
            class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {{ title }}
          </h1>
          <p
            v-if="subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 50 } }"
            class="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            {{ subtitle }}
          </p>
          <div
            v-if="$slots.cta"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 100 } }"
          >
            <slot name="cta"></slot>
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  backgroundImage: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
