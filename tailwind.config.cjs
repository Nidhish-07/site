module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      keyframes: {
        openclose: {
          '0%': {
            top: '0.2rem', width: '0',
          },
          '5%': {
            width: '0'
          },
          '15%': {
            width: '230px'
          },
          '30%': {
            top: '0.2rem', width: '230px'
          },
          '33%': {
            top: '0.2rem', width: '0'
          },
          '35%': {
            top: '0.2rem', width: '0'
          },
          '38%': {
            top: '-4.5rem'
          },
          '48%': {
            top: '-4.5rem', width: '190px'
          },
          '66%': {
            top: '-4.5rem', width: '0', textIndent: '0'
          },
          '71%': {
            top: '-9rem', width: '0', textIndent: '5px'
          },
          '86%': {
            top: '-9rem', width: '285px'
          },
          '98%': {
            top: '-9rem', width: '0', textIndent: '5px'
          },
          '100%': {
            top: '0', width: '0', textIndent: '0'
          },
        }
      },
      animation: {
        'opening-closing': "open close 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

/*
openclose:{
  '0%':{
    top:'0.2rem',width:0,
  }
}
*/