/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "3xl":"1792px",
        "onlymobile" : {min:"0px", max : "639px"}
      },
      colors: {
        'Cactus1': '#14C38E',
        'Cactus2' : "#00FFAB",
        'Cactus3' : "#B8F1B0",
        'base-100' : "#1a1a1a",
        
        
      },
    },
  },
  daisyui: {
    themes: ["forest" , "light"],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')({ nocompatible: true })],
  
};
