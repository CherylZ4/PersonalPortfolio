import type { Config } from 'tailwindcss'


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#77767A',
        'custom-hover': '#8C73C3',
      },
      fontFamily: {
        inter: ['Inter', 'san-serif'],
      },
      screens: {
        'xxs': '300px',
        'xs': '500px',
        'sm': '640px',      // Small screens
        'md': '768px',      // Medium screens
        'lg': '1024px',     // Large screens
        'xl': '1280px',     // Extra large screens
        // Add more breakpoints as needed
      },
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],

} satisfies Config


