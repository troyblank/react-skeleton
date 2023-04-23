import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig( () => {
	return {
		build: {
			sourcemap: true,
		},
		server: {
			port: 9000,
		},

		plugins: [
			reactRefresh(),
		],
	}
} )
