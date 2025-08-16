/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'custme' : 'linear-gradient(135deg , #4b0082 0% , #3bb2f6 100%)',
        
        
      },
      colors : {
        'middle-blue' : '#3b82f6' ,
        'dark-gray' : '#6b7280',
        'main-red' : '#e91e63' ,
        'main-green' : '#009688' ,
        'main-blue' : '#03a9f4',
        'hover' : '#ffffff1c'
      },
      boxShadow : {
        'custom' : '0 4px 12px rgba( 0 , 0 , 0 , 0.1)'
      },
      height: {
        '600' : '600px',
      },
      width : {
        '10%' : '10%'
      },
      maxHeight : {
        '447' : '447px'
      },
      maxWidth:{
        '575' : '575px',
      },
      backgroundColor : {
        'glass' : 'rgba(100, 482, 360, 0.2)'
      },
    },
  },
  plugins: [],
}