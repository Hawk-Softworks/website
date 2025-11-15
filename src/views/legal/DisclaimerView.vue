<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />

    <!-- Simple Header -->
    <section class="section-bg-gradient py-16">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <h1
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="heading-primary text-center text-4xl font-bold md:text-5xl"
        >
          Disclaimer
        </h1>
      </div>
    </section>

    <!-- Content -->
    <section class="section-bg-primary py-20">
      <div class="mx-auto max-w-6xl px-8 lg:px-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="mx-auto max-w-3xl"
        >
          <div class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12">
            <div class="prose prose-invert max-w-none">
              <p class="text-secondary-color text-lg leading-relaxed">
                All Hawk Softworks products are for private use only. They are only intended to
                support simulation software and never for real life use. Hawk Softworks accepts no
                liability for any unintended use of the software. Also excluded are all damages
                caused by our software. We do not guarantee the accuracy, validity or functionality
                of our software.
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
