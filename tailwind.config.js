/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'

      },
      colors: {
        'custom-pink': '#f50963',
        'custom-light-Green': '#DFF4D6',
        'custom-light-purple': '#F2E3F8',
        'custom-light-sky': '#DCEFF6',
        'custom-light-pink': '#F6E0EC'
      }
    },
  },
  plugins: [],
}

