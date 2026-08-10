import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0C10',
          900: '#06070A',
          800: '#0A0C10',
          700: '#141820',
          600: '#1C222C',
          500: '#2A3140',
        },
        accent: {
          DEFAULT: '#2EC4FF',
          light: '#6DD9FF',
          dark: '#1498C9',
        },
        mist: '#E8ECF1',
        steel: '#9AA3AD',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6DD9FF 0%, #2EC4FF 55%, #1498C9 100%)',
      },
      boxShadow: {
        accent: '0 18px 40px -12px rgba(46, 196, 255, 0.45)',
        glass: '0 24px 60px -20px rgba(0, 0, 0, 0.75)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -28px, 0) scale(1.06)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(24px, 18px, 0) rotate(8deg)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
