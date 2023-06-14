/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-button': '#C9F270',
        secondary: '#E8F0FE',
        link: '#3365e6',
        'primary-text': '#0e0e0e',
        primary: '#FAFAFA',
        'secondary-text': '#666',
        'secondary-button': '#DAF996',
        'text-red': '#cc3341',
        'light-gray': '#DADADA',
      },
      backgroundImage: {
        'signup-banner': "url('../assets/signupbanner.png')",
        'signin-banner': "url('../assets/loginbanner.png')",
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundPosition: {
        'bottom-left-signup': 'bottom 35% left 50% ',
      },
      screens: {
        'mobile-md': '440px',
        'mobile-lg': '512px',
      },
    },
  },
  plugins: [],
};
