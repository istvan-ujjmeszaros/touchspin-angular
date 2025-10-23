import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },
  moduleNameMapper: {
    '^@touchspin/angular$': '<rootDir>/src/public-api.ts',
    '^@touchspin/angular/vanilla$': '<rootDir>/vanilla/src/public_api.ts',
    '^@touchspin/angular/bootstrap3$': '<rootDir>/bootstrap3/src/public_api.ts',
    '^@touchspin/angular/bootstrap4$': '<rootDir>/bootstrap4/src/public_api.ts',
    '^@touchspin/angular/bootstrap5$': '<rootDir>/bootstrap5/src/public_api.ts',
    '^@touchspin/angular/tailwind$': '<rootDir>/tailwind/src/public_api.ts',
    '^@touchspin/core$': '<rootDir>/../../node_modules/@touchspin/core/dist/index.js',
    '^@touchspin/core/(.*)$': '<rootDir>/../../node_modules/@touchspin/core/dist/$1',
    '^@touchspin/renderer-(.*)$': '<rootDir>/../../node_modules/@touchspin/renderer-$1/dist/index.js',
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts', '!src/**/index.ts', '!src/public-api.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary', 'lcovonly'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transformIgnorePatterns: ['node_modules/(?!(@angular|@touchspin|rxjs)/)'],
};

export default config;
