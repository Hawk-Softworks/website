<template>
  <nav class="w-full bg-bg-secondary border-b border-white/10">
    <div class="max-w-6xl mx-auto px-8 lg:px-16">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <RouterLink
          to="/"
          class="flex items-center gap-2 group transition-all duration-300"
        >
          <img
            :src="logoImage"
            alt="Hawk Softworks Logo"
            class="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span class="text-xl font-bold text-text-primary group-hover:text-aviation-blue transition-colors duration-300">
            Hawk Softworks
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <!-- Nav Links -->
          <div class="flex items-center space-x-8">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-3">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-text-primary p-2 rounded-lg hover:bg-border-custom-light transition-colors"
            aria-label="Toggle menu"
          >
            <font-awesome-icon
              :icon="mobileMenuOpen ? 'xmark' : 'bars'"
              class="w-6 h-6"
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
        class="md:hidden bg-bg-primary border-t border-border-custom-light"
      >
        <div class="max-w-6xl mx-auto px-8 py-4 space-y-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 text-text-secondary hover:text-text-primary hover:bg-border-custom-light rounded-lg transition-all duration-300 font-medium"
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
  { name: 'FlightPlanner', path: '/fp' }
]
</script>

<style scoped>
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
