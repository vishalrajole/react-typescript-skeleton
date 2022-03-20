/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  rootDir: "../src",
  setupFilesAfterEnv: ["../jest/jest.setup.ts"],
};
