/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf4fb', // lighter, calm blue
          100: '#d2e7f7',
          200: '#b3d8ef',
          300: '#8cc6e6',
          400: '#5eb0db',
          500: '#3498ca',
          600: '#217dbb',
          700: '#1866a3',
          800: '#15517e',
          900: '#123e5c',
        },
        background: {
          light: '#f6fafd', // very light blue/gray
          DEFAULT: '#f6fafd',
          dark: '#1a2636', // deep blue-gray for dark mode
          alternate: '#f8fafc', // slightly different light background
          alternateDark: '#1e293b', // slightly different dark background
          alternate2: '#e2e8f0', // much more distinct light background
          alternate2Dark: '#334155', // more distinct dark background
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 