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
      padding : "20px",
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
        'subtitle' : '60px',
        'h2' : '40px',
        'h3' : '30px',
        'h4' : '25px',
        'h5' : '20px',
        'p' : '16px'
      },
      fontFamily : {
        "raleway" : "var(--raleway)"
      }
    },
  },
  plugins: [],
}

