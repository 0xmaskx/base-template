/** @type {import('tailwindcss').Config} */

/* Remove u*/
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {},
    },
    daisyui: {
      themes: [
        {
          default: {
            "primary": "#661AE6",
            "secondary": "#D926AA",
            "accent": "#1FB2A5",
            "neutral": "#191D24",
            "base-100": "#2A303C",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
}
