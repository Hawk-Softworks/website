<template>
  <component
    :is="href ? 'a' : to ? 'RouterLink' : 'button'"
    :href="href"
    :to="to"
    :target="href && external ? '_blank' : undefined"
    :rel="href && external ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
    class="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#060914]"
  >
    <slot></slot>
    <svg
      v-if="external && href"
      class="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, outline
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  href: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  },
  external: {
    type: Boolean,
    default: false
  }
})

const buttonClasses = computed(() => {
  const baseClasses = 'shadow-lg'

  switch (props.variant) {
    case 'primary':
      return `${baseClasses} bg-gradient-to-r from-[#3b82f6] to-[#0ea5e9] text-white hover:shadow-xl focus:ring-[#3b82f6]`
    case 'secondary':
      return `${baseClasses} bg-white/10 text-white hover:bg-white/20 focus:ring-white/50`
    case 'outline':
      return `${baseClasses} border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white focus:ring-[#3b82f6]`
    default:
      return baseClasses
  }
})
</script>
