import tailwindAnimate from 'tailwindcss-animate';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		colors: {
			primary: '#9E78CF',
			green: '#78CFB0',
			gray: '#1D1825',
			'gray-light': '#D1D5DB',
			background: '#15101C',
			white: '#F9F9F9',
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	mode: 'jit',
	plugins: [tailwindAnimate, tailwindScrollbarHide],
};
