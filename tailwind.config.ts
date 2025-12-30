import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          'dark': '#391f56',
          'medium': '#4a2c6a',
          'light': '#5a3c7a',
        },
        'tan': {
          'gold': '#caa982',
          'light': '#CCB18A',
          'dark': '#b89970',
        },
        'teal': {
          'accent': '#7EBEC5',
        },
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
}

export default config
