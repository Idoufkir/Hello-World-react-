module.exports = {
   purge: ['./src/index.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      header: "0px 0px 50px 1px rgba(0, 0, 0, 0.35)",
      card: "0px 0px 25px 1px rgba(0, 0, 0, 0.25)",
    },
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
     },
     spacing: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
     }
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
      space: ['hover', 'focus'],
      
    },
  },
  plugins: [],

}
