/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./content/**/*.{md,mdx}",
	],
	corePlugins: {
		preflight: false,
	},
	darkMode: ["class"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"--tw-prose-links": "-webkit-link",
					},
				},
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
};
