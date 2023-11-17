/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter Variable, sans-serif'],
			serif: ['Lusitana', 'Georgia', 'serif']
		},
		extend: {
			colors: {
				primary: colors.rose,
				svelte: '#ff3e00'
			}
		}
	},
	plugins: []
};
