/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./node_modules/flowbite/**/*.{js,ts}',
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			colors: {
				xprimary: '#ffd900',
				'xprimary-content': '#4c4528',
				xsecondary: '#ffa400',
				'xsecondary-content': '#5d3f18',
				xaccent: '#ffa451',
				'xaccent-content': '#180a02',
				xneutral: '#060023',
				'xneutral-content': '#c4c5d0',
				'base-100': '#ffffff',
				'base-200': '#e8e8e8',
				'base-300': '#d1d1d1',
				'base-content': '#161616',
			},
			screens: {
				'3xl': '2560px',
				smoll: '375px',
				medium: '425px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		
		require('daisyui'),
		
	],
	
};
