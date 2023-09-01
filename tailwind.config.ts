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
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
} satisfies Config

