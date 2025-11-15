<template>
  <section class="py-20 bg-gradient-to-b from-[#060914] to-[#0a0e27]">
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
              <div class="w-16 h-16 bg-gradient-to-br from-[#5865f2] to-[#7289da] rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
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
              <div class="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#0ea5e9] rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
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
