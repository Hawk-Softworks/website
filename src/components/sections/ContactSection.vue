<template>
  <section class="py-20 contact-section-bg">
    <div class="max-w-6xl mx-auto px-8 lg:px-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
        class="text-center mb-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
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
          <div class="relative rounded-2xl p-8 transition-all duration-200 h-full flex flex-col shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)] bg-bg-primary border border-white/10 hover:border-[#06b6d4]">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 contact-icon-bg rounded-xl flex items-center justify-center contact-icon shadow-lg">
                <font-awesome-icon :icon="['fab', 'discord']" class="text-3xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white">Discord</h3>
            </div>
            <p class="mb-6 flex-1 text-slate-300">
              Join our Discord community to connect with other virtual pilots and air traffic controllers.
            </p>
            <AppButton
              href="https://discord.gg/JGwqwpS"
              external
              variant="outline"
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
          <div class="relative rounded-2xl p-8 transition-all duration-200 h-full flex flex-col shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)] bg-bg-primary border border-white/10 hover:border-[#06b6d4]">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 contact-icon-bg rounded-xl flex items-center justify-center contact-icon shadow-lg">
                <font-awesome-icon icon="envelope" class="text-3xl" />
              </div>
              <h3 class="text-2xl md:text-3xl font-bold text-white">E-Mail</h3>
            </div>
            <p class="mb-6 flex-1 text-slate-300">
              Have questions or need support? Send us an email and we'll get back to you as soon as possible.
            </p>
            <AppButton
              href="mailto:support@hawk-softworks.de"
              variant="outline"
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

<style scoped>
.contact-section-bg {
  background-image: var(--background-image-gradient-primary);
}

.contact-icon-bg {
  background-image: var(--background-image-gradient-blue);
}

.contact-icon {
  color: #ffffff;
}
</style>
