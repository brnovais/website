const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      brand: {
        50: '#FFF3DE',
        100: '#FFE0AE',
        200: '#FFCB78',
        300: '#FFB640',
        400: '#FFA600',
        500: '#FF9600',
        600: '#FC8A00',
        700: '#F77900',
        800: '#F26800',
        900: '#E94B00',
        DEFAULT: '#FFA600',
      },
      dark: {
        50: '#F7F7F7',
        100: '#EEEEEE',
        200: '#E2E2E2',
        300: '#D0D0D0',
        400: '#ABABAB',
        500: '#8A8A8A',
        600: '#636363',
        700: '#505050',
        800: '#323232',
        900: '#121212',
        DEFAULT: '#121212',
      },
      light: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        DEFAULT: '#FAFAFA',
      },
      transparent: 'transparent',
    },
    extend: {},
    fontFamily: {
      comfortaa: 'Comfortaa Variable, cursive',
      lora: 'Lora Variable, serif',
      montserrat: 'Montserrat Variable, sans-serif',
      sans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
      serif: ['Lora Variable', ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
