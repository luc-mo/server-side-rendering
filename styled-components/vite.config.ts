import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: './',
	publicDir: './public',
	resolve: {
		alias: {
			components: path.resolve(__dirname, './src/components')
		},
	},
  build: {
    emptyOutDir: false,
    sourcemap: true
  },
	plugins: [react()],
})
