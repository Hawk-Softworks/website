<template>
  <footer class="footer-bg mt-auto border-t border-white/10">
    <div class="max-w-6xl mx-auto px-8 lg:px-16 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <!-- Sites -->
        <div>
          <h5 class="footer-heading font-bold text-lg mb-4 uppercase tracking-wide">Sites</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/"
                class="footer-link transition-colors duration-150 block"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/fsm"
                class="footer-link transition-colors duration-150 block"
              >
                FlightStrip Manager
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fsm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link transition-colors duration-150 block"
              >
                FlightStrip Manager WebApp
              </a>
            </li>
            <li>
              <RouterLink
                to="/fpm"
                class="footer-link transition-colors duration-150 block"
              >
                FlightPlanner
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fpm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link transition-colors duration-150 block"
              >
                FlightPlanner WebApp
              </a>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h5 class="footer-heading font-bold text-lg mb-4 uppercase tracking-wide">About</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/legal/disclaimer"
                class="footer-link transition-colors duration-150 block"
              >
                Disclaimer
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/legal/terms"
                class="footer-link transition-colors duration-150 block"
              >
                Terms and Conditions
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="footer-heading font-bold text-lg mb-4 uppercase tracking-wide">Contact</h5>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:support@hawk-softworks.de"
                class="footer-link transition-colors duration-150 block"
              >
                E-Mail
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/JGwqwpS"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link transition-colors duration-150 block"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-border-top pt-6 text-center">
        <p class="footer-text">
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

<style scoped>
.footer-bg {
  background-color: var(--color-bg-primary);
}

.footer-heading {
  color: var(--color-text-primary);
}

.footer-link {
  color: var(--color-text-muted);
}

.footer-link:hover {
  color: #06b6d4;
}

.footer-text {
  color: var(--color-text-muted);
}
</style>
