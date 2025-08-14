import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#6b4e3d',
          900: '#4a3429',
          950: '#2d1f1a',
        },
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#737373',
        },
        cream: '#f7f3f0',
        gold: '#d4af37',
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-coffee': "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200')",
        'coffee-shop': "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200')",
        'coffee-beans-bg': "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200')",
        'latte-art': "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200')",
        'coffee-equipment': "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config