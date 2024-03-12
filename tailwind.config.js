/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"congress-blue": {
					50: "#f0f7ff",
					100: "#e1eefd",
					200: "#bcdcfb",
					300: "#80c0f9",
					400: "#3da0f3",
					500: "#1485e3",
					600: "#0767c2",
					700: "#07529d",
					800: "#0b4c8c",
					900: "#0e3b6c",
					950: "#0a2647",
				},
			},
		},
	},
	plugins: [],
};
