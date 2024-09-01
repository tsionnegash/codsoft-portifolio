/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        
      },
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/wp2476292.jpg')",
        'custom-bg2': "url('/src/assets/images/modern-black-lines-background-vector.jpg')",
        'custom-bg3': "url('/src/assets/images/81847ce5e64eff5c41f2c1f3c8f0d797.jpg')",
        'custom-bg4': "url('/src/assets/images/white-background-with-wavy-lines-copy-space_23-2148822145.avif')",
        'custom-bg5': "url('/src/assets/images/black_and_white_stripes_4k_hd_abstract.jpg')",

      },
      height: {
        'bg-lg': '500px', 
      },
      colors: {
        'custom-green': 'hsla(127, 8%, 22%, 1)',
        'customBrown': 'rgb(77, 75, 75)',
      },
    },
  },
  plugins: [],
};
