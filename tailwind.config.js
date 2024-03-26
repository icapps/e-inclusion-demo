/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// basics
			transparent: "transparent",
			white: "#ffffff",
			black: "#000000",
			gray: "#cccccc",
			blueZodiac: "#0a1930",
			green: "#00ff00",
			brightTurquoise: "#00e5ff",
			red: "#EF5350",

			// specific
			outlineColor: "#93C700",
			background: "#007da3",
		},

		fontFamily: {
			default: ["ui-sans-serif", "system-ui"],
			poppins: ["Poppins", "ui-sans-serif", "system-ui"],
		},
	},
	plugins: [],
};
