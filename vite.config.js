import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5500',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
  },
  host: true,
  port: 3000,
  },
  optimizeDeps: {
    include: ['*.js'], // Include all .js files in your project
  },
  esbuild: {
    loader: "jsx",
    include: [
      // Business as usual for .jsx and .tsx files
      "src/**/*.jsx",
      "node_modules/**/*.jsx",
      // --- OR ---

      // Add these lines to allow all .js files to contain JSX
      "src/**/*.js",
      "node_modules/**/*.js",
    ],
    exclude: [],
  }
})

