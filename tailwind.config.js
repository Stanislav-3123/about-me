/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
        screens: {
            lg: '1920px',
            md: '1440px',
            sm: '1024px',
            tb: '768px'
        },
        extend: {
            backgroundImage: {
                'header-logo': "url('/images/logo-EL.svg')",
                'title-dt': "url('/images/Image/Frame-671-min.jpg')",
                'learn-more': "url('/images/Image/Frame-670-1-min.jpg')",
                'shape-1': "url('/images/Image/shape-1.png')",
                'expertise': "url('/images/Image/Expertise-cut.jpg')",
                'expertiseDT': 'url(/images/Image/Expertise.jpg)',
                'cards-bg': 'url(/images/Image/CardsBG.jpg)',
                'help': 'url(/images/Image/help.jpg)',
                'policies': 'url(/images/Image/policies.jpg)',
            },
            animation: {
                'rotate_full': 'full_circle 60s linear infinite',
                "move": "move 2s ease-in-out infinite",
                'marquee': 'marquee 25s linear infinite',
                "slide-down": "slide-down 0.8s",
                "fade-in": "fade-in 0.8s",
                "open-mobile-menu": "slide-left 0.5s",
                "open-mobile-bottom": "slide-up 0.5s",
                'key-slide-up': 'slide_up 0.5s ease-in-out',
                'key-appear': 'key-appear 0.3s ease-in-out',
                'key-disappear': 'key-disappear 0.3s ease-in-out',
                'key-slide-text': 'key-slide-text 0.3s ease-in-out',
                'key-slide-down-text': 'key-slide-down-text 0.3s ease-in-out',
                'link-hover': 'link-hover 0.3s ease-in-out',
                'mobile_cube_zoom': 'mobile_cube_zoom 0.9s ease-in-out',
                'hover_joke': 'joke 5s linear infinite',
                'button_arrow': 'button_arrow 1s linear infinite',
                'appear-dote': 'appear 0.5s linear',
                'card-slide-up' : 'card-slide-up-rotate 0.5s ease-in-out',
                'card-slide-up-reverse' : 'card-slide-up-rotate-reverse 0.5s ease-in-out',
                'card-bg-slide-up' : 'card-bg-slide-up-rotate 0.5s ease-in-out',
                'card-bg-slide-up-reverse' : 'card-bg-slide-up-rotate-reverse 0.5s ease-in-out',
                'card-swipe-up' : 'card-swipe-up 1s ease-in-out',
                'card-show' : "card-show 1s ease-in-out",
                'card-show-reverse' : 'card-show-revers 1s ease-in-out'
            },
            keyframes: {
                'card-show-revers' : {
                    '0%': {transform: 'translateY(-40px)'},
                    '100%': {transform: 'translateY(0px)'}
                },
                'card-show' : {
                    '0%': {transform: 'translateY(0px)'},
                    '100%': {transform: 'translateY(-40px)'}
                },
                'card-swipe-up' : {
                    '0%': {transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: 1},
                    '100%': {transform: 'translateY(-600px) translateX(5px) rotate(-15deg)', opacity: 0}
                },
                'card-slide-up-rotate': {
                    '0%': {transform: 'translateY(0px) translateX(0px) rotate(0deg)'},
                    '100%': {transform: 'translateY(70px) translateX(25px) rotate(15deg)'}
                },
                'card-slide-up-rotate-reverse': {
                    '0%': {transform: 'translateY(70px) translateX(25px) rotate(15deg)'},
                    '100%': {transform: 'translateY(0px) translateX(0px) rotate(0deg)'}
                },
                'card-bg-slide-up-rotate': {
                    '0%': {transform: 'translateY(0px) translateX(0px) rotate(0deg)'},
                    '100%': {transform: 'translateY(-55px) translateX(-10px) rotate(-5.1deg)'}
                },
                'card-bg-slide-up-rotate-reverse': {
                    '0%': {transform: 'translateY(-55px) translateX(-10px) rotate(-5.1deg)'},
                    '100%': {transform: 'translateY(0px) translateX(0px) rotate(0deg)'}
                },
                'appear': {
                    '0%': {opacity: 0},
                    '100%': {opacity: 1}
                },
                'button_arrow': {
                    '0%': {transform: 'translateX(0px) rotate(180deg)'},
                    '50%': {transform: 'translateX(10px) rotate(180deg)'},
                    '100%': {transform: 'translateX(0px) rotate(180deg)'}
                },
                'joke': {
                    '0%': {transform: 'translateY(200px) translateX(-200px) rotate(0deg)', scale: 100},
                    '5%': {transform: 'translateY(145px) translateX(200px) rotate(180deg)', scale: 95},
                    '10%': {transform: 'translateY(-265px) translateX(-300px) rotate(360deg)', scale: 90},
                    '15%': {transform: 'translateY(325px) translateX(100px) rotate(180deg)', scale: 85},
                    '20%': {transform: 'translateY(-225px) translateX(-365px) rotate(0deg)', scale: 80},
                    '25%': {transform: 'translateY(225px) translateX(225px) rotate(180deg)', scale: 75},
                    '30%': {transform: 'translateY(-425px) translateX(-325px) rotate(360deg)', scale: 70},
                    '35%': {transform: 'translateY(325px) translateX(325px) rotate(180deg)', scale: 65},
                    '40%': {transform: 'translateY(-225px) translateX(-225px) rotate(0deg)', scale: 60},
                    '45%': {transform: 'translateY(325px) translateX(425px) rotate(180deg)', scale: 55},
                    '50%': {transform: 'translateY(-425px) translateX(-425px) rotate(360deg)', scale: 50},
                    '55%': {transform: 'translateY(425px) translateX(225px) rotate(180deg)', scale: 45},
                    '60%': {transform: 'translateY(-225px) translateX(-325px) rotate(0deg)', scale: 40},
                    '65%': {transform: 'translateY(325px) translateX(225px) rotate(180deg)', scale: 35},
                    '70%': {transform: 'translateY(-225px) translateX(-225px) rotate(360deg)', scale: 30},
                    '75%': {transform: 'translateY(425px) translateX(425px) rotate(180deg)', scale: 25},
                    '80%': {transform: 'translateY(-430px) translateX(-330px) rotate(0deg)', scale: 20},
                    '85%': {transform: 'translateY(260px) translateX(260px) rotate(180deg)', scale: 15},
                    '90%': {transform: 'translateY(-370px) translateX(-170px) rotate(360deg)', scale: 10},
                    '95%': {transform: 'translateY(200px) translateX(200px) rotate(180deg)', scale: 5, opacity: 1},
                    '100%': {transform: 'translateY(0px) translateX(0px) rotate(1800deg)', scale: 0, opacity: 0},
                },
                'mobile_cube_zoom': {
                    '0%': {transform: 'rotate(0)', scale: 0},
                    '100%': {transform: 'rotate(360deg)', scale: 100}
                },
                'link-hover': {
                    '0%': {transform: 'translateY(-10px)'},
                    '100%': {transform: 'translateY(10px)'}
                },
                'key-slide-text': {
                    '0%': {opacity: 0, transform: 'translateY(100px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-slide-down-text': {
                    '0%': {opacity: 1, transform: 'translateY(0px)'},
                    '100%': {opacity: 0, transform: 'translateY(200px)'}
                },
                'key-appear': {
                    '0%': {opacity: 1, transform: 'translateY(200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0px)'}
                },
                'key-disappear': {
                    '0%': {opacity: 1, transform: 'translateY(-200px)'},
                    '100%': {opacity: 1, transform: 'translateY(0)'}
                },
                'slide_up': {
                    '0%': {transform: 'translateY(0)'},
                    '100%': {transform: 'translateY(-200px)'}
                },

                'full_circle': {
                    '0%': {transform: 'rotate(0)'},
                    '25%': {transform: 'rotate(90deg)'},
                    '50%': {transform: 'rotate(180deg)'},
                    '75%': {transform: 'rotate(270deg)'},
                    '100%': {transform: 'rotate(360deg)'}
                },
                "move": {
                    '0%, 100%': {transform: 'translate(0, 0)'},
                    '25%': {transform: 'translate(50px, 0)'},
                    '50%': {transform: 'translate(50px, 50px)'},
                    '75%': {transform: 'translate(0, 50px)'},
                },
                'marquee': {
                    '0%': {transform: 'translateX(-50%)'},
                    '100%': {transform: 'translateX(0)'}
                },
                "slide-left": {
                    "0%": {
                        transform: "translateX(300px)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                "slide-up": {
                    "0%": {
                        transform: "translateY(300px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
                right: {
                    '0%, 100%': {transform: 'translateX(-25%)'},
                    '50%': {transform: 'none'}
                },
                "slide-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            colors: {
                primary: "#1E1E1E",
                light_blue: "#44699F",
                dark_blue: "#0E2146",
                bg: "#D9E6F9",
                grey: "#F5F5F5",
                accent: "#4DD0E1",
                secondary: "#A6AAAB",
                policies: "#3D3E49",
                darkBlue: "#0E2146",
                green: "#006064",
                hoverGreen: "linear-gradient(50deg, hsla(182, 100%, 20%, 1), hsla(187, 71%, 59%, 1))"
            }
        },
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require('tailwindcss-animated'),
    ],
}

