/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dasa Export Brand Palette (Pure White Theme)
        'surface': '#ffffff',
        'surface-bright': '#ffffff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f8f9fa',
        'surface-container': '#f1f3f5',
        'surface-container-high': '#e9ecef',
        'surface-container-highest': '#dee2e6',
        
        'on-surface': '#1b1c19',
        'on-surface-variant': '#5a4139',
        'outline': '#8e7067',
        'outline-variant': '#dfc0b7',
        
        'primary': '#F15A24', // Tomato Red / Orange
        'on-primary': '#ffffff',
        'primary-container': '#ffdad0',
        'on-primary-container': '#3a0a00',
        
        'secondary': '#466552', // Earthy Green
        'on-secondary': '#ffffff',
        'on-secondary-fixed': '#012112', // Deep dark green for Quality & Footer
        
        'tertiary': '#835400',
        'tertiary-container': '#A16900', // Gold/Brown accent
        'tertiary-fixed-dim': '#f5be6c',
        
        'background': '#ffffff',
        'on-background': '#1b1c19',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'headline': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'label': ['Inter', 'sans-serif'],
        'eyebrow': ['Inter', 'sans-serif'],
      },
      spacing: {
        'margin-desktop': '48px',
        'margin-mobile': '20px',
        'gutter': '24px',
        'section-gap': '96px',
        'stack-lg': '24px',
      }
    },
  },
  plugins: [],
}
