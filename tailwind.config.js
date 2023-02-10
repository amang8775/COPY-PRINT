/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish : ["Mulish ", "sans-serif"] , 
      },
      colors:{
        bgBlue : "#bcdaf7" , 
        bgBlueShadow : "#e4f0fe" , 
        btnBlue : "#030448" , 
        txtGrey : "#9b9a9b" , 
        textBlue : "#1d8cf4" , 
        lightBlue: "#2585E2",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
      }
      
    },
  },
  plugins: [],
};
