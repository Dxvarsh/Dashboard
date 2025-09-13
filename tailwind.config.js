// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {},
//     },
//   }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, or breakpoints here
      colors: {
        'default': '#ffffff',
        'subtle': '#666666',
        'muted': '#999999',
        'darker': '#333333',
        'state-soft': '#f0f0f0',
        'state-soft-hover': '#e0e0e0',
        'state-soft-press': '#d0d0d0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
  // safelist: [
  //   {
  //     pattern: /(text|bg|border|hover)/,
  //   },
  // ]
}
