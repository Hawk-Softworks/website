<template>
  <footer class="footer-bg mt-auto border-t border-white/10">
    <div class="mx-auto max-w-6xl px-8 py-8 lg:px-16">
      <div class="mb-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Sites -->
        <div>
          <h5 class="footer-heading mb-4 text-lg font-bold tracking-wide uppercase">Sites</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/" class="footer-link block transition-colors duration-150">
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/fsm" class="footer-link block transition-colors duration-150">
                FlightStrip Manager
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fsm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link block transition-colors duration-150"
              >
                FlightStrip Manager WebApp
              </a>
            </li>
            <li>
              <RouterLink to="/fpm" class="footer-link block transition-colors duration-150">
                FlightPlanner
              </RouterLink>
            </li>
            <li>
              <a
                href="https://fpm.hawk-softworks.de"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link block transition-colors duration-150"
              >
                FlightPlanner WebApp
              </a>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h5 class="footer-heading mb-4 text-lg font-bold tracking-wide uppercase">About</h5>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/legal/disclaimer"
                class="footer-link block transition-colors duration-150"
              >
                Disclaimer
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/legal/terms"
                class="footer-link block transition-colors duration-150"
              >
                Terms and Conditions
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h5 class="footer-heading mb-4 text-lg font-bold tracking-wide uppercase">Contact</h5>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:support@hawk-softworks.de"
                class="footer-link block transition-colors duration-150"
              >
                E-Mail
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/JGwqwpS"
                target="_blank"
                rel="noopener noreferrer"
                class="footer-link block transition-colors duration-150"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-border-top pt-6 text-center">
        <p class="footer-text">© {{ currentYear }} Copyright: Hawk Softworks</p>
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
