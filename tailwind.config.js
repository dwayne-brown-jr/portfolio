/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0806',
          secondary: '#120e09',
          card: 'rgba(255,255,255,0.025)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover: 'rgba(255,255,255,0.13)',
        },
        accent: {
          DEFAULT: '#ea580c',
          light: '#fb923c',
          dark: '#c2410c',
          muted: 'rgba(234,88,12,0.12)',
          glow: 'rgba(234,88,12,0.2)',
        },
        ink: {
          DEFAULT: '#fafaf9',
          secondary: '#a8a29e',
          muted: '#57534e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
