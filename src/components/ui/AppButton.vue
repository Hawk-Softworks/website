<template>
  <component
    :is="href ? 'a' : to ? 'RouterLink' : 'button'"
    :href="href"
    :to="to"
    :target="href && external ? '_blank' : undefined"
    :rel="href && external ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
    class="group/button relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-[#0b0e12] overflow-hidden"
  >
    <span v-if="variant === 'primary'" class="absolute inset-0 button-primary-hover opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 rounded-lg"></span>
    <span class="relative z-10 inline-flex items-center gap-2">
      <slot></slot>
      <font-awesome-icon
        v-if="external && href"
        icon="arrow-up-right-from-square"
        class="w-4 h-4"
      />
    </span>
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
      return `${baseClasses} button-primary hover:shadow-xl`
    case 'secondary':
      return `${baseClasses} bg-white/10 text-white hover:bg-white/20 focus:ring-white/50`
    case 'outline':
      return `${baseClasses} button-outline`
    default:
      return baseClasses
  }
})
</script>

<style scoped>
.button-primary {
  background-image: var(--background-image-gradient-blue);
  color: #ffffff;
}

.button-primary:focus {
  --tw-ring-color: rgba(90, 122, 155, 0.5);
}

.button-primary-hover {
  background-image: var(--background-image-gradient-blue-hover);
}

.button-outline {
  border: 2px solid var(--color-aviation-blue);
  color: var(--color-aviation-blue);
}

.button-outline:hover {
  background-color: var(--color-aviation-blue);
  color: #ffffff;
}

.button-outline:focus {
  --tw-ring-color: rgba(90, 122, 155, 0.5);
}
</style>
