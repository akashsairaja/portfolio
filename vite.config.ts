import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [['transform-remove-console', { exclude: ['error', 'info'] }]],
			},
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {

			},
		},
	},
	publicDir: 'public',
	base: './',
	server: {
		port: 3000,
		open: true,
		hmr: {
			overlay: true,
		},
	},
	build: {
		outDir: 'build',
		assetsDir: 'static',
		sourcemap: true,
	},
});
