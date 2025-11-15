<template>
  <nav class="fixed top-0 w-full z-50 bg-[#111418]/90 backdrop-blur-lg border-b border-white/10">
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
          <span class="text-xl font-bold text-white group-hover:text-[#5a7a9b] transition-colors duration-300">
            Hawk Softworks
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            active-class="text-white"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-[#111418] border-t border-white/10"
      >
        <div class="max-w-6xl mx-auto px-8 py-4 space-y-3">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            active-class="text-white bg-white/10"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Spacer to prevent content from going under fixed navbar -->
  <div class="h-16"></div>
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
