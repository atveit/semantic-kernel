import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['packages/**/test/**/*.ts'],
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      lines: 85,
      functions: 85,
      branches: 85,
      statements: 85,
      include: ['packages/**/src/**/*.ts'],
      exclude: [
        '**/dist/**',
        'samples/**',
        'packages/abstractions/**',
        'packages/core/src/reflect-metadata.ts',
      ],
    },
  },
});
