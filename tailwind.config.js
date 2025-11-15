/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Map CSS custom properties to Tailwind color utilities
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'border-custom': 'var(--color-border)',
        'border-custom-light': 'var(--color-border-light)',
        'aviation-blue': 'var(--color-aviation-blue)',
        'aviation-cyan': 'var(--color-aviation-cyan)',
        'aviation-sky': 'var(--color-aviation-sky)',
      },
    },
  },
}
