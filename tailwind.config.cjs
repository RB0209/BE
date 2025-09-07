module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#38b6ff',
      },
      boxShadow: {
        'glass-primary': '0 8px 24px rgba(56,182,255,0.12)',
      },
    },
  },
  plugins: [],
}
