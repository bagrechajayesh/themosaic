// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// NOTE:
// - No JSON files are referenced here.
// - We set the sole Rollup entry to index.html.
// - If you previously had a plugin expecting `data: ['../data/*.json']`, remove that option.

export default defineConfig({
  plugins: [
    react(),

    // Guard against accidentally adding .json as an entry in the future
    {
      name: 'guard-json-entry',
      configResolved(config) {
        const input = config.build?.rollupOptions?.input;
        const arr = Array.isArray(input) ? input : input ? [input] : [];
        if (arr.some((i) => typeof i === 'string' && i.endsWith('.json'))) {
          throw new Error(
            'JSON files cannot be used as build entries. Remove any .json from rollupOptions.input.'
          );
        }
      },
    },
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  // We do NOT include JSON in assetsInclude; JSON is imported via `?raw` and parsed manually
  build: {
    sourcemap: false,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },

  server: {
    port: 5173,
    open: true,
  },
});
