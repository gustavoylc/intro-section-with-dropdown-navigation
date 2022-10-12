/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		minWidth: {
			375: "375px",
		},
		extend: {
			fontFamily: {
				sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"footer-primary": "hsl(228, 45%, 44%)",
				"almost-white": "hsl(0, 0%, 98%)",
				"medium-gray": "hsl(0, 0%, 41%)",
				"almost-black": "hsl(0, 0%, 8%)",
			},
			transitionDuration: {
				1500: "1500ms",
			},
		},
	},
	plugins: [],
};
