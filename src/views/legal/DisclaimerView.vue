<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />

    <!-- Simple Header -->
    <section class="bg-gradient-dark-reverse py-16">
      <div class="max-w-6xl mx-auto px-8 lg:px-16">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-4xl md:text-5xl font-bold text-white text-center"
        >
          Disclaimer
        </h1>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20 bg-[#0b0e12]">
      <div class="max-w-6xl mx-auto px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="max-w-3xl mx-auto"
        >
          <div class="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <div class="prose prose-invert max-w-none">
              <p class="text-gray-300 text-lg leading-relaxed">
                All Hawk Softworks products are for private use only.
                They are only intended to support simulation software and never for real life use.
                Hawk Softworks accepts no liability for any unintended use of the software. Also excluded are all
                damages caused by our software.
                We do not guarantee the accuracy, validity or functionality of our software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from '../../components/layout/AppNavbar.vue'
import AppFooter from '../../components/layout/AppFooter.vue'
</script>
