import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    trace: 'on-first-retry',
    // Enable coverage
    coverage: {
      output: 'coverage/lcov.info', // Specify the output file for coverage
    },
  },
});
