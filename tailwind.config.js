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
      },
      animation: {
        'gradient-background': 'gradient-background 10s ease infinite, pulse 5s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
}