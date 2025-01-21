// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths to your project
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'insta-purple': '#9b4de2',
//         'insta-dark': '#121212',
//         'insta-light': '#ffffff',
//         'insta-gray': '#999999',
//       },
//       fontFamily: {
//         sans: ['Helvetica', 'Arial', 'sans-serif'],
//       },
//       spacing: {
//         '1/2': '50%',
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this path to include all your components
    './public/index.html', // Add your HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Custom blue
        secondary: '#9333ea', // Custom purple
        accent: '#10b981', // Custom green
        background: '#f3f4f6', // Light background color
        textPrimary: '#1f2937', // Dark text color
        textSecondary: '#6b7280', // Gray text color
      },
      maxWidth: {
        '4xl': '56rem', // Maximum width for large screens
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Custom sans-serif font family
        serif: ['Merriweather', 'serif'], // Custom serif font family
      },
      spacing: {
        18: '4.5rem', // Custom spacing for padding/margin
        72: '18rem',
        84: '21rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 10px 15px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        'sm': '0.875rem', // Custom small text
        'base': '1rem', // Regular text size
        'lg': '1.125rem', // Larger text size
        'xl': '1.25rem', // Extra large text size
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        'full': '100%',
        '1/2': '50%',
        '1/3': '33.33%',
        '2/3': '66.66%',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
