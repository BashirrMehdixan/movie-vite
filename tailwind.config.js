/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: '576px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1370px',
                },
            },
            screens: {
                'sm': "576px",
                'md': "992px",
                'custom-lg': "800px"

            }
        },
    },
}

