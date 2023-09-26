/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
	plugins: [require("daisyui")],
	daisyui: {
    themes: [
			{
        mytheme: {
					"primary": "#ffffff",
					"secondary": "#ffffff",
					"accent": "#fff",
					"neutral": "#fff",
					"base-100": "#000000",
					"info": "#2997FF",
					"success": "#4ade80",
					"warning": "#f59e0b",
					"error": "#f43f5e",
        },
      },
		],
  },
}

