/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Work Sans', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                'serif-jp': ['"Noto Serif JP"', '"Noto Serif TC"', 'serif'],
                'handwriting': ['"Klee One"', 'cursive'],
                'sans-tc': ['"Noto Sans TC"', 'sans-serif'],
            },
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                cta: 'var(--color-cta)',
                background: 'var(--color-background)',
                text: 'var(--color-text)',
                'wa-purple': '#826a9d',
                'wa-pink': '#EC4899',
                'wa-cyan': '#06B6D4',
                'wa-paper': '#f9f8f4',
                'wa-tape': '#d1c1d7',
                'wa-ink': '#2d2a26',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-out forwards',
            }
        },
    },
    plugins: [],
}
