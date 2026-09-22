/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#c6283c',
          strong: '#a80a2a',
          muted: '#e56267',
          soft: '#f4d4d8',
          subtle: '#f9e9eb',
        },
        aventate: {
          red: '#c6283c',
          'red-strong': '#a80a2a',
          'red-muted': '#e56267',
          'red-soft': '#f4d4d8',
          'red-subtle': '#f9e9eb',
          dark: '#1c1715',
          body: '#453f3b',
          muted: '#69625c',
          subtle: '#766e69',
          border: '#eae6e4',
          'border-strong': '#d8d4d0',
          bg: '#ffffff',
          'bg-subtle': '#fbfaf9',
        },
        navy: {
          950: '#0b101b',
          900: '#0f172a',
          850: '#141d33',
          800: '#1e293b',
          700: '#334155',
        },
        accent: {
          gold: '#c6283c', // Aligned with Aventate Red for legacy components
          amber: '#c6283c',
          warm: '#a80a2a',
          soft: 'rgba(198, 40, 60, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
