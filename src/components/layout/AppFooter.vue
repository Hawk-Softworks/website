<template>
  <footer class="bg-[#0a0e27] border-t border-white/10 mt-auto">
    <div class="max-w-6xl mx-auto px-8 lg:px-16 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        <!-- Sites -->
        <div>
          <h5 class="text-white font-bold text-lg mb-4 uppercase tracking-wide">Sites</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/fsm"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                FlightStrip Manager
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fsm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                FlightStrip Manager WebApp
              </a>
            </li>
            <li>
              <RouterLink
                to="/fpm"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                FlightPlanner
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fpm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                FlightPlanner WebApp
              </a>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h5 class="text-white font-bold text-lg mb-4 uppercase tracking-wide">About</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/legal/disclaimer"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                Disclaimer
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/legal/terms"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                Terms and Conditions
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="text-white font-bold text-lg mb-4 uppercase tracking-wide">Contact</h5>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:support@hawk-softworks.de"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                E-Mail
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/JGwqwpS"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors duration-300 block"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 pt-8 text-center">
        <p class="text-gray-400">
          © {{ currentYear }} Copyright: Hawk Softworks
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>
