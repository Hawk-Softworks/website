<template>
  <section class="py-20 bg-gradient-dark">
    <div class="max-w-6xl mx-auto px-8 lg:px-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          You want to contact us?
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Discord Card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="group relative"
        >
          <div class="relative bg-[#0a0e27] rounded-2xl p-8 border border-white/10 hover:border-[#5865f2]/50 transition-all duration-200 h-full flex flex-col shadow-lg hover:shadow-xl">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-discord rounded-xl flex items-center justify-center text-white shadow-lg">
                <font-awesome-icon :icon="['fab', 'discord']" class="text-3xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white">Discord</h3>
            </div>
            <p class="text-gray-300 mb-6 flex-1">
              Join our Discord community to connect with other virtual pilots and air traffic controllers.
            </p>
            <AppButton
              href="https://discord.gg/JGwqwpS"
              external
              variant="primary"
              class="w-full justify-center"
            >
              Join now
            </AppButton>
          </div>
        </div>

        <!-- Email Card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300, delay: 50 } }"
          class="group relative"
        >
          <div class="relative bg-[#0a0e27] rounded-2xl p-8 border border-white/10 hover:border-[#3b82f6]/50 transition-all duration-200 h-full flex flex-col shadow-lg hover:shadow-xl">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-sky rounded-xl flex items-center justify-center text-white shadow-lg">
                <font-awesome-icon icon="envelope" class="text-3xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white">E-Mail</h3>
            </div>
            <p class="text-gray-300 mb-6 flex-1">
              Have questions or need support? Send us an email and we'll get back to you as soon as possible.
            </p>
            <AppButton
              href="mailto:support@hawk-softworks.de"
              variant="primary"
              class="w-full justify-center"
            >
              Write us
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '../ui/AppButton.vue'
</script>
