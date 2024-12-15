import { defineConfig } from 'vite'
import type { ServerOptions } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'
// INFO: https://vitejs.dev/guide/migration.html#automatic-https-certificate-generation
// TODO: manually generate secure web certificates
import basicSsl from '@vitejs/plugin-basic-ssl'

const port = 3000

const commonServerOptions: Pick<ServerOptions, 'port' | 'open'> = {
	port,
	open: true
}

const commonPlugins = [tsconfigPaths(), react()]
const devPlugins = [basicSsl()]

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
	const isDev = mode === 'development' || command === 'serve'

	return {
		server: {
			...commonServerOptions
		},
		preview: {
			...commonServerOptions
		},
		// TODO: manual chunks splitting
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version)
		},
		plugins: [...commonPlugins, ...(isDev ? devPlugins : [])]
	}
})
