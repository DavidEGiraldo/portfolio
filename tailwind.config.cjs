const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        'nord': {
          0: '#2E3440',
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#8FBCBB',
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          11: '#BF616A',
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
      fontFamily: {
        sans: ['Inter',...defaultTheme.fontFamily.sans],
        mono: ['Fira Code',...defaultTheme.fontFamily.mono]
      },
      backgroundColor: {
        default: '#242933',
      },
      fontSize: {
        clamp: "clamp(2rem, 8vw, 4.5rem)",
        "clamp-subtitle": "clamp(1.625rem, 5vw, 2rem)",
        "clamp-project-title": "clamp(1.5rem, 5vw, 1.75rem)",
        "clamp-nav": "clamp(1rem, 4vw, 1.25rem)",
        "clamp-contactme": "clamp(2.5rem, 5vw, 3.75rem)",
        "clamp-projects": "clamp(2.5rem, 8vw, 5rem)"
      }
    },
  },
	plugins: [],
}
