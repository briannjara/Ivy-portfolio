module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#e6e6fa',
          300: '#d8b4fe',
          500: '#b57edc',
          600: '#9f72d1',
          700: '#8a56c5',
          800: '#7539b9',
        },
        neon: {
          blue: '#00fff2',
          pink: '#ff00e5',
          purple: '#8b5cf6',
          orange: '#ff7849',
        },
      },
      animation: {
        'gradient-background': 'gradient-background 10s ease infinite, pulse 5s ease-in-out infinite',
        'card-hover': 'card-hover 0.3s ease-in-out forwards',
        'tag-bounce': 'tag-bounce 0.6s ease-in-out',
        'border-flow': 'border-flow 4s ease infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        'gradient-background': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'card-hover': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(139, 92, 246, 0)' },
          '100%': { transform: 'scale(1.02)', boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }
        },
        'tag-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' }
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        glow: '0 0 15px -3px rgba(var(--tw-shadow-color))',
        'card': '0 0 20px rgba(139, 92, 246, 0.1)',
        'card-hover': '0 0 30px rgba(139, 92, 246, 0.3)',
      },
    },
  },
  plugins: [],
}