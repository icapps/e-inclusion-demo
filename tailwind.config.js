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
			blueZodiac: "#0a1931",
			green: "#00ff00",
			brightTurquoise: "#00e5ff",
			red: "#ef5350",
			orange: "#ec7100",

			// specific
			outlineColor: "#ec7100",
			background: "#007da3",
			backgroundCompliant: "#094f64",
		},

		fontFamily: {
			default: ["ui-sans-serif", "system-ui"],
			poppins: ["Poppins", "ui-sans-serif", "system-ui"],
			noto: ["Noto Sans", "ui-sans-serif", "system-ui"],
		},
	},
	plugins: [],
};
