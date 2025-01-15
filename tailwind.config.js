/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072DC',
        paginationBox: '#EBEBEB',
        tableHead: '#595959',
        tableBody: '#626262',
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(235deg, rgba(217, 217, 217, 0.00) 12.27%, rgba(18, 19, 22, 0.70) 45%, #121316 85%, #121316 130%)",
        "summarize_gradient":
          "linear-gradient(to bottom right, rgba(0, 45, 191, 0.2) 7%, rgba(67, 150, 247, 0.5) 46%, rgba(255, 155, 210, 0.5) 81%, rgba(201, 255, 252, 0.5) 99%)",
        "question_gradient":
          "linear-gradient(to bottom right, rgba(0, 45, 191) 7%, rgba(67, 150, 247) 46%, rgba(255, 155, 210) 81%, rgba(201, 255, 252) 99%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(0deg, #F5F4CE 0%, #FFBD9F 100%)',
        'company-gradient': 'linear-gradient(to bottom, #FEC4CB 0%, #F4C8EF 63%)',
        'skill-gradient': 'radial-gradient(circle at top left, #241C70 0%, #194EA6 16%, #188AE6 27%, #0AA9CA 33%, #8F48F8 49%, #743DD6 63%, #493BC2 71%, #383084 83%)',
      },
      animation: {
        blink: "blink 1.5s infinite",
        'slide-in': 'slide-in 0.5s ease-out forwards',
        gradient: 'gradient 8s linear infinite'
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}