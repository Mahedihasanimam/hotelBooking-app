/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myfont': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('https://bellevuetheme.com/demo/hotelclassic/wp-content/uploads/sites/9/2023/12/jason-leung-poI7DelFiVA-unsplash-605x465.jpg')",

        'regBg': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnF-LLX30kMEHfWCZbZrXmck95z8pEjZ9dLWbW1Cbmlge6aJ-T5_l3jmGD6D9RW3Q3kE&usqp=CAU')",
        'about-bg': "url('https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
