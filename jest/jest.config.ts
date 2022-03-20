/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  rootDir: "../src",
  setupFilesAfterEnv: ["../jest/jest.setup.ts"],
  collectCoverage: true,
  coverageDirectory: "../jest/coverage",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -10,
    },
  },
};
