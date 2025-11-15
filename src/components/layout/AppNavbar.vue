<template>
  <nav class="bg-bg-secondary w-full border-b border-white/10">
    <div class="mx-auto max-w-6xl px-8 lg:px-16">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo/Brand -->
        <RouterLink to="/" class="group flex items-center gap-2 transition-all duration-300">
          <img
            :src="logoImage"
            alt="Hawk Softworks Logo"
            class="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span
            class="text-text-primary group-hover:text-aviation-blue text-xl font-bold transition-colors duration-300"
          >
            Hawk Softworks
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-8 md:flex">
          <!-- Nav Links -->
          <div class="flex items-center space-x-8">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="nav-link text-text-secondary font-medium transition-colors duration-150"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-text-primary hover:bg-border-custom-light rounded-lg p-2 transition-colors"
            aria-label="Toggle menu"
          >
            <font-awesome-icon
              :icon="mobileMenuOpen ? 'xmark' : 'bars'"
              class="h-6 w-6"
              :class="{ 'rotate-90': mobileMenuOpen }"
              style="transition: transform 0.3s ease"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="bg-bg-primary border-border-custom-light border-t md:hidden"
      >
        <div class="mx-auto max-w-6xl space-y-3 px-8 py-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="nav-link text-text-secondary hover:bg-border-custom-light block rounded-lg px-4 py-3 font-medium transition-all duration-150"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoImage from '@/assets/images/logo_transparent.png'

const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'FlightStrip Manager', path: '/fsm' },
  { name: 'FlightPlanner', path: '/fp' },
]
</script>

<style scoped>
/* Cyan color on hover */
.nav-link:hover {
  color: #06b6d4;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
