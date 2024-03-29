/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitestSetup.ts'],
    coverage: {
      provider: 'istanbul',
    },
  },
});
