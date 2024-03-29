import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '425px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px',
		},
		extend: {
			colors: {
				white: '#FFFFFF',
				'black-1': '#08162C',
				'black-2': '#000000',
				'black-3': '#212121',
				brown: '#917B7D',
				'gray-1': '#F7FAFC',
				'gray-2': '#4F525A',
				'purple-1': '#A5A6F6',
				'purple-2': '#5459D8',
				'purple-3': '#454ad9',
			},
		},
	},
	plugins: [],
};
export default config;
