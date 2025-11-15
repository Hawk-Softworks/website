<template>
  <section
    class="relative min-h-[280px] overflow-hidden bg-cover py-10 md:min-h-[350px] md:py-16"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center -50px',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <!-- Gradient Overlay -->
    <div class="bg-gradient-overlay absolute inset-0"></div>

    <!-- Content -->
    <div class="relative mx-auto max-w-6xl px-8 lg:px-16">
      <div class="mx-auto text-center">
        <slot name="content">
          <h1
            v-if="title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
            class="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl"
          >
            {{ title }}
          </h1>
          <p
            v-if="subtitle"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: 50 } }"
            class="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl"
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
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.bg-gradient-overlay {
  background-image: var(--background-image-gradient-overlay);
}
</style>
