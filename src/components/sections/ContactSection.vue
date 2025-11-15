<template>
  <section class="contact-section-bg py-20">
    <div class="mx-auto max-w-6xl px-8 lg:px-16">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
        class="mb-12 text-center"
      >
        <h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">You want to contact us?</h2>
      </div>

      <div class="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <!-- Discord Card -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 300 } }"
          class="group relative"
        >
          <div
            class="bg-bg-primary relative flex h-full flex-col rounded-2xl border border-white/10 p-8 shadow-lg transition-all duration-200 hover:border-[#06b6d4] hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)]"
          >
            <div class="mb-6 flex items-center gap-4">
              <div
                class="contact-icon-bg contact-icon flex h-16 w-16 items-center justify-center rounded-xl shadow-lg"
              >
                <font-awesome-icon :icon="['fab', 'discord']" class="text-3xl" />
              </div>
              <h3 class="text-2xl font-bold text-white md:text-3xl">Discord</h3>
            </div>
            <p class="mb-6 flex-1 text-slate-300">
              Join our Discord community to connect with other virtual pilots and air traffic
              controllers.
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
          <div
            class="bg-bg-primary relative flex h-full flex-col rounded-2xl border border-white/10 p-8 shadow-lg transition-all duration-200 hover:border-[#06b6d4] hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)]"
          >
            <div class="mb-6 flex items-center gap-4">
              <div
                class="contact-icon-bg contact-icon flex h-16 w-16 items-center justify-center rounded-xl shadow-lg"
              >
                <font-awesome-icon icon="envelope" class="text-3xl" />
              </div>
              <h3 class="text-2xl font-bold text-white md:text-3xl">E-Mail</h3>
            </div>
            <p class="mb-6 flex-1 text-slate-300">
              Have questions or need support? Send us an email and we'll get back to you as soon as
              possible.
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
