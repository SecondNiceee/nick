const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens : {
      "420" : "420px",
      "480" : "480px",
      "sm" : "576px",
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1536px"
    },
    container :{
      padding : "40px",
      screens : {
        "480" : "100%",
        "sm" : "100%",
        "md" : "100%",
        "lg" : "100%",
        "xl" : "1252px"
      },
      center : true
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize : {
        'title' : "clamp(2.5rem, 1.169rem + 4.44vw, 4.563rem)",
        'subtitle' : 'clamp(2.5rem, 1.694rem + 2.69vw, 3.75rem)',
        'h2' : 'clamp(1.563rem, 0.958rem + 2.02vw, 2.5rem)',
        'h3' : 'clamp(1.563rem, 1.361rem + 0.67vw, 1.875rem)',
        'h4' : 'clamp(1rem, 0.637rem + 1.21vw, 1.563rem)',
        'h5' : '20px',
        'p' : '16px'
      },
      boxShadow : {
        custom : '6px 6px 20px 0 rgba(255, 255, 255, 0.5)'
      },
      fontFamily : {
        "raleway" : "var(--raleway)"
      }
    },
  },
  plugins: [plugin(function({addUtilities}){
    addUtilities({
      ".section-title" : {
        "fontSize" : "clamp(2.5rem, 1.694rem + 2.69vw, 3.75rem)",
        "margin-right" : "36px",
        "font-weight" : "700"
      },
      ".section-gap" : {

      }
    })
  } )],
}

