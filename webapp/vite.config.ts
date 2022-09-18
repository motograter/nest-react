import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
// import alias from '@rollup/plugin-alias';
import tsconfigPaths from 'vite-tsconfig-paths'
import reactDocgenTypescript from '@joshwooding/vite-plugin-react-docgen-typescript'

export default defineConfig(({ mode }): any => {
  const env = loadEnv(mode, `${__dirname}/vars`, '')

  return {
    envDir: `./vars`,
    envPrefix: 'ENV',
    plugins: [
      react(),
      svgr(),
      tsconfigPaths()
    ],
    base: '',
    server: {
      port: env.DEV_PORT
    }
  }
})
