/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        galaxy: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          accent: '#7C3AED',
          'accent-hover': '#6D28D9',
          hover: '#F9FAFB',
          text: {
            primary: '#111827',
            secondary: '#4B5563'
          }
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};