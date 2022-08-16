/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {},
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
