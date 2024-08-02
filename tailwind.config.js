// Font SF Pro Display
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 6DE754 base color
      colors : {
        'green-1': "#6DE754",
        'gray-1' : "#909090", 
        'gray-2' : "#1E201D"
      },
      fontFamily: {
        'sf-pro-display': ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      // background #161815
      backgroundColor: {
        'black': "#161815",
      },
    },
  },
  plugins: [],
};
