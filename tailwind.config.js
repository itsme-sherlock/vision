// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        visionBlue: '#003049',
        visionGold: '#D4AF37',
      },
      sectionHeading: {
        fontSize: '60px',
        marginLeft: '20px',
        marginTop: '20px',
      },
      sectionText: {
        fontSize: '20px',
      }
    },
  },
  plugins: [],
};
